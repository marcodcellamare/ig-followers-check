import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import Config from '@config';
import JSZip from 'jszip';
import { inflate, deflate } from '@rescale/slim';
import { ItfData, ItfFilterTypes } from '@interfaces/scheme';

const InfoProvider = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
	const session = 'userData';
	const [userData, setUserData] = useState({});
	const [userDataName, setUserDataName] = useState('');
	const [userDataTypes, setUserDataTypes] = useState([]);
	const [accounts, setAccounts] = useState<ItfData[]>([]);
	const [accountsFiltered, setAccountsFiltered] = useState<ItfData[]>([]);
	const [totals, setTotals] = useState({
		followers: 0,
		following: 0,
		not_followers: 0,
		filtered: 0,
		_: 0,
	});
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState<ItfFilterTypes>('');
	const [search, setSearch] = useState('');

	const gatedSetUserData = useCallback((d: object) => {
		setUserData(d);
		setUserDataTypes(Object.keys(d));
		sessionStorage.setItem(session, deflate(d));
	}, []);

	const gatedSetUserDataName = useCallback((n: string) => {
		setUserDataName(n);
		sessionStorage.setItem(`${session}Name`, n);
	}, []);

	const gatedSetPage = useCallback((p: number) => {
		setPage(p);
	}, []);

	const gatedSetFilter = useCallback((f: ItfFilterTypes) => {
		setFilter(f);
		setPage(0);
	}, []);

	const gatedSetSearch = useCallback((q: string) => {
		setSearch(q);
		setPage(0);
	}, []);

	const zipToUserData = useCallback(
		(file: File) => {
			try {
				let fullJson = {};

				JSZip.loadAsync(file)
					.then((zip) => {
						const total = Object.keys(zip.files).filter(
							(f) =>
								f.startsWith(
									'connections/followers_and_following/'
								) && f.endsWith('.json')
						).length;
						let k = 0;

						zip.forEach((path, f) => {
							if (
								f.name.startsWith(
									'connections/followers_and_following/'
								) &&
								f.name.endsWith('.json')
							) {
								f.async('text')
									.then((content) => {
										const json = JSON.parse(content);

										if (!Array.isArray(json)) {
											Object.keys(json).forEach((t) => {
												const _t = t.replace(
													Config.data.typeCleanup,
													''
												);

												if (
													!fullJson.hasOwnProperty(_t)
												) {
													fullJson[_t] = [];
												}
												fullJson[_t] = [
													...fullJson[_t],
													...json[t],
												];
											});
										} else {
											if (!fullJson.hasOwnProperty('_')) {
												fullJson['_'] = [];
											}
											fullJson['_'] = [
												...fullJson['_'],
												...json,
											];
										}
									})
									.catch((err) => {
										throw Object.assign(new Error(err), {
											code: 406,
										});
									})
									.finally(() => {
										if (k >= total - 1) {
											gatedSetUserData(fullJson);
											gatedSetUserDataName(file.name);
										}
										k++;
									});
							}
						});
					})
					.catch((err) => {
						throw Object.assign(new Error(err), {
							code: 406,
						});
					});
			} catch (err) {
				console.error(err);
			}
		},
		[gatedSetUserData, gatedSetUserDataName]
	);

	useEffect(() => {
		let merged = [];
		let types = {};

		userDataTypes.forEach((t) => {
			types = {
				...types,
				[t]: { _: false, timestamp: 0 },
			};
		});

		Object.keys(userData).forEach((type: string) => {
			userData[type].forEach((datas) => {
				datas.string_list_data.forEach((data: ItfData) => {
					let idx = merged.findIndex(
						(m: ItfData) => m.href === data.href
					);
					if (idx === -1) {
						merged.push({
							...data,
							value: data.value ?? data.href.split('/').pop(),
							info: types,
						});
						idx = merged.findIndex(
							(m: ItfData) => m.href === data.href
						);
					}
					merged[idx].info = {
						...merged[idx].info,
						[type]: {
							_: true,
							timestamp: data.timestamp,
						},
					};
				});
			});
		});
		merged.sort(
			(a: ItfData, b: ItfData) =>
				a.info.following.timestamp - b.info.following.timestamp ||
				a.value.localeCompare(b.value)
		);
		setAccounts(merged);
	}, [userData, userDataTypes]);

	useEffect(() => {
		const totalFollowers = accounts.filter(
			(account) => account.info._._ === true
		).length;
		const totalFollowing = accounts.filter(
			(account) => account.info.following._ === true
		).length;
		const totalNotFollowers = accounts.filter(
			(account) =>
				account.info._._ === false &&
				account.info.blocked_users._ === false &&
				account.info.following_hashtags._ === false &&
				account.info.follow_requests_sent._ === false &&
				account.info.unfollowed_users._ === false &&
				account.info.dismissed_suggested_users._ === false
		).length;
		const total = accounts.length;
		let _accountsFiltered = accounts;

		// Filters

		if (filter) {
			_accountsFiltered = _accountsFiltered.filter((account) => {
				switch (filter) {
					case 'followers':
						return account.info._._ === true;

					case 'following':
						return account.info.following._ === true;

					case 'not_followers':
						return (
							account.info._._ === false &&
							account.info.blocked_users._ === false &&
							account.info.following_hashtags._ === false &&
							account.info.follow_requests_sent._ === false &&
							account.info.unfollowed_users._ === false &&
							account.info.dismissed_suggested_users._ === false
						);

					default:
						return true;
				}
			});
		}

		// Search

		if (search) {
			_accountsFiltered = _accountsFiltered.filter((account) => {
				return account.value.includes(search);
			});
		}

		// Totals

		setTotals({
			followers: totalFollowers,
			following: totalFollowing,
			not_followers: totalNotFollowers,
			filtered: _accountsFiltered.length,
			_: total,
		});

		// Pagination

		_accountsFiltered = _accountsFiltered.slice(
			Config.itemsPerPage * page,
			Config.itemsPerPage * page + Config.itemsPerPage
		);

		setAccountsFiltered(_accountsFiltered);
	}, [accounts, page, filter, search]);

	useEffect(() => {
		const _userData = sessionStorage.getItem(session);
		const _userDataName = sessionStorage.getItem(`${session}Name`);

		if (_userData) gatedSetUserData(inflate(_userData));
		if (_userDataName) gatedSetUserDataName(_userDataName);
	}, [gatedSetUserData, gatedSetUserDataName]);

	return (
		<InfoContext.Provider
			value={{
				zipToUserData,
				userData,
				userDataName,
				accounts,
				accountsFiltered,
				totals,
				page,
				filter,
				search,
				setUserData: gatedSetUserData,
				setPage: gatedSetPage,
				setFilter: gatedSetFilter,
				setSearch: gatedSetSearch,
			}}>
			{children}
		</InfoContext.Provider>
	);
};
const InfoContext = createContext({
	zipToUserData: (file: File) => {},
	userData: {},
	userDataName: '',
	accounts: [],
	accountsFiltered: [],
	totals: {
		followers: 0,
		following: 0,
		not_followers: 0,
		filtered: 0,
		_: 0,
	},
	page: 0,
	filter: '',
	search: '',
	setUserData: (content: object) => {},
	setPage: (p: number) => {},
	setFilter: (f: ItfFilterTypes) => {},
	setSearch: (f: string) => {},
});

const useInfo = () => {
	return useContext(InfoContext);
};
export { InfoProvider, useInfo };

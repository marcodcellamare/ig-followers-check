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
	const session = {
		data: 'data',
		name: 'filename',
		visited: 'visited',
		ratings: 'ratings',
	};
	const [userData, setUserData] = useState({});
	const [name, setName] = useState('');
	const [types, setTypes] = useState<string[]>([]);
	const [visited, setChecked] = useState<string[]>([]);
	const [ratings, setRatings] = useState({});

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

	const top = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const gatedSetUserData = useCallback(
		(d: object) => {
			setUserData(d);
			setTypes(Object.keys(d));
			sessionStorage.setItem(session.data, deflate(d));
		},
		[session.data]
	);

	const gatedSetName = useCallback(
		(n: string) => {
			setName(n);
			sessionStorage.setItem(session.name, n);
		},
		[session.name]
	);

	const gatedSetPage = useCallback((p: number) => {
		setPage(p);
		top();
	}, []);

	const gatedSetFilter = useCallback(
		(f: ItfFilterTypes) => {
			setFilter(f);
			gatedSetPage(0);
		},
		[gatedSetPage]
	);

	const gatedSetSearch = useCallback(
		(q: string) => {
			setSearch(q);
			gatedSetPage(0);
		},
		[gatedSetPage]
	);

	const setRatingFromFile = useCallback(
		(c: string) => {
			if (c.startsWith(Config.data.extensions.ratings + '|')) {
				try {
					const _ratings = inflate(
						c.slice((Config.data.extensions.ratings + '|').length)
					);
					setRatings(_ratings);
					sessionStorage.setItem(session.ratings, deflate(_ratings));
				} catch (error) {
					console.error(error);
				}
			}
		},
		[session.ratings]
	);

	const getRatingToFile = useCallback((): string => {
		try {
			return Config.data.extensions.ratings + '|' + deflate(ratings);
		} catch (error) {
			console.error(error);
		}
		return '';
	}, [ratings]);

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
									.catch((error) => {
										throw Object.assign(new Error(error), {
											code: 406,
										});
									})
									.finally(() => {
										if (k >= total - 1) {
											gatedSetUserData(fullJson);
											gatedSetName(file.name);
										}
										k++;
									});
							}
						});
					})
					.catch((error) => {
						throw Object.assign(new Error(error), {
							code: 406,
						});
					});
			} catch (error) {
				console.error(error);
			}
		},
		[gatedSetUserData, gatedSetName]
	);

	const clicked = useCallback(
		(v?: string) => {
			setChecked((prevChecked) => {
				if (v) {
					prevChecked = [...prevChecked, v];
				} else {
					prevChecked = [];
				}
				sessionStorage.setItem(session.visited, deflate(prevChecked));
				return prevChecked;
			});
		},
		[session.visited]
	);

	const setRate = (v: string, r: number) => {
		setRatings((prevRatings) => {
			if (r) {
				prevRatings = { ...prevRatings, [v]: r };
			} else {
				delete prevRatings[v];
			}
			sessionStorage.setItem(session.ratings, deflate(prevRatings));
			return prevRatings;
		});
	};

	const getRate = useCallback(
		(v: string): number => {
			return ratings.hasOwnProperty(v) ? parseInt(ratings[v]) : 0;
		},
		[ratings]
	);

	useEffect(() => {
		let merged = [];
		let _types = {};

		types.forEach((t) => {
			_types = {
				..._types,
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
							clicked: false,
							info: _types,
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
				b.info.following?.timestamp - a.info.following?.timestamp ||
				a.value.localeCompare(b.value)
		);
		setAccounts(merged);
	}, [userData, types]);

	useEffect(() => {
		const totalFollowers = accounts.filter(
			(account) => account.info._?._ === true
		).length;
		const totalFollowing = accounts.filter(
			(account) => account.info.following?._ === true
		).length;
		const totalNotFollowers = accounts.filter(
			(account) =>
				account.info._?._ !== true &&
				account.info.blocked_users?._ !== true &&
				account.info.following_hashtags?._ !== true &&
				account.info.follow_requests_sent?._ !== true &&
				account.info.unfollowed_users?._ !== true &&
				account.info.dismissed_suggested_users?._ !== true
		).length;
		const total = accounts.length;
		let _accountsFiltered = accounts;

		// Filters

		if (filter) {
			_accountsFiltered = _accountsFiltered.filter((account) => {
				switch (filter) {
					case 'followers':
						return account.info._?._ === true;

					case 'following':
						return account.info.following?._ === true;

					case 'not_followers':
						return (
							account.info._?._ !== true &&
							account.info.blocked_users?._ !== true &&
							account.info.following_hashtags?._ !== true &&
							account.info.follow_requests_sent?._ !== true &&
							account.info.unfollowed_users?._ !== true &&
							account.info.dismissed_suggested_users?._ !== true
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
		const _userData = sessionStorage.getItem(session.data);
		const _name = sessionStorage.getItem(session.name);
		let _visited: string | object = sessionStorage.getItem(session.visited);
		const _ratings = sessionStorage.getItem(session.ratings);

		if (_userData) {
			try {
				gatedSetUserData(inflate(_userData));
			} catch (error) {
				console.error(error);
			}
		}
		if (_name) gatedSetName(_name);
		if (_visited) {
			try {
				_visited = inflate(_visited);

				if (Array.isArray(_visited)) {
					setChecked(_visited);
				} else {
					throw Object.assign(
						new Error('"visited" is not an Array'),
						{
							code: 406,
						}
					);
				}
			} catch (error) {
				console.error(error);
			}
		}
		if (_ratings) {
			try {
				setRatings(inflate(_ratings));
			} catch (error) {
				console.error(error);
			}
		}
	}, [
		gatedSetUserData,
		gatedSetName,
		session.data,
		session.name,
		session.visited,
		session.ratings,
	]);

	return (
		<InfoContext.Provider
			value={{
				zipToUserData,
				userData,
				name,
				visited,
				accounts,
				accountsFiltered,
				totals,
				page,
				filter,
				search,
				clicked,
				setRate,
				getRate,
				setUserData: gatedSetUserData,
				setPage: gatedSetPage,
				setFilter: gatedSetFilter,
				setSearch: gatedSetSearch,
				setRatingFromFile,
				getRatingToFile,
			}}>
			{children}
		</InfoContext.Provider>
	);
};
const InfoContext = createContext({
	zipToUserData: (file: File) => {},
	userData: {},
	name: '',
	visited: [],
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
	clicked: (v?: string) => {},
	setRate: (v: string, r: number) => {},
	getRate: (v: string): number => 0,
	setUserData: (content: object) => {},
	setPage: (p: number) => {},
	setFilter: (f: ItfFilterTypes) => {},
	setSearch: (f: string) => {},
	setRatingFromFile: (c: string) => {},
	getRatingToFile: (): string => '',
});

const useInfo = () => {
	return useContext(InfoContext);
};
export { InfoProvider, useInfo };

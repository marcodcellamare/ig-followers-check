import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import Config from '@config';
import {
	ItfData,
	ItfExport,
	ItfExportFollowing,
	ItfFilterTypes,
} from '@interfaces/scheme';

const InfoProvider = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
	const [followers, setFollowers] = useState<ItfExport[]>([]);
	const [following, setFollowing] = useState<ItfExportFollowing>({});
	const [accounts, setAccounts] = useState<ItfData[]>([]);
	const [accountsFiltered, setAccountsFiltered] = useState<ItfData[]>([]);
	const [totals, setTotals] = useState({
		followers: 0,
		following: 0,
		filtered: 0,
		_: 0,
	});
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState<ItfFilterTypes>('');
	const [search, setSearch] = useState('');

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

	const gatedSetFollowers = useCallback((content: ItfExport[]) => {
		setFollowers(content);
		sessionStorage.setItem('followers', JSON.stringify(content));
	}, []);

	const gatedSetFollowing = useCallback((content: ItfExportFollowing) => {
		setFollowing(content);
		sessionStorage.setItem('following', JSON.stringify(content));
	}, []);

	const isFollowing = useCallback(
		(content: ItfExport[] | ItfExportFollowing): boolean => {
			return (
				typeof content === 'object' &&
				!Array.isArray(content) &&
				Array.isArray(content[Config.data.following.root]) &&
				content[Config.data.following.root][0].hasOwnProperty(
					'title'
				) &&
				content[Config.data.following.root][0].hasOwnProperty(
					'media_list_data'
				) &&
				content[Config.data.following.root][0].hasOwnProperty(
					'string_list_data'
				)
			);
		},
		[]
	);

	const isFollowers = useCallback(
		(content: ItfExport[] | ItfExportFollowing): boolean => {
			return (
				Array.isArray(content) &&
				content[0].hasOwnProperty('title') &&
				content[0].hasOwnProperty('media_list_data') &&
				content[0].hasOwnProperty('string_list_data')
			);
		},
		[]
	);

	const flatten = ({ data, root, info }) => {
		return (root && Array.isArray(data[root]) ? data[root] : data)
			.map((r: ItfExport) => r[info])
			.flat(1);
	};
	const merge = ({ merged, data, type }) => {
		data.forEach((d: ItfData) => {
			let idx = merged.findIndex((m: ItfData) => m.value === d.value);

			if (idx === -1) {
				merged.push({
					...d,
					following: false,
					followingTimestamp: 0,
					followingDate: false,
					followers: false,
					followersTimestamp: 0,
					followersDate: false,
				});
				idx = merged.findIndex((m: ItfData) => m.value === d.value);
			}
			merged[idx][type] = true;
			merged[idx][`${type}Timestamp`] = d.timestamp;
			merged[idx][`${type}Date`] = new Date(d.timestamp * 1000);
		});
		return merged;
	};

	useEffect(() => {
		let followingFlatten = [];
		let followersFlatten = [];
		let merged = [];

		if (
			following &&
			isFollowing(following) &&
			followers &&
			isFollowers(followers)
		) {
			followingFlatten = flatten({
				data: following,
				root: Config.data.following.root,
				info: Config.data.following.info,
			});
			followersFlatten = flatten({
				data: followers,
				root: Config.data.followers.root,
				info: Config.data.followers.info,
			});
			merged = merge({
				merged,
				data: followingFlatten,
				type: 'following',
			});
			merged = merge({
				merged,
				data: followersFlatten,
				type: 'followers',
			});
			merged.sort(
				(a: ItfData, b: ItfData) =>
					a.followingTimestamp - b.followingTimestamp ||
					a.value.localeCompare(b.value)
			);
		}
		setAccounts(merged);
	}, [followers, following, isFollowers, isFollowing]);

	useEffect(() => {
		const totalFollowers = accounts.filter(
			(account) => account.followers === true
		).length;
		const totalFollowing = accounts.filter(
			(account) => account.following === true
		).length;
		const total = accounts.length;
		let _accountsFiltered = accounts;

		// Filters

		if (filter) {
			_accountsFiltered = _accountsFiltered.filter((account) => {
				switch (filter) {
					case 'followers':
						return account.followers === true;

					case 'following':
						return account.following === true;

					case 'not_followers':
						return account.followers === false;

					default:
						return true;
				}
			});
		}

		// Search

		if (search) {
			_accountsFiltered = _accountsFiltered.filter((account) => {
				return account.value.includes(search);
				//|| account.href.includes(search)
			});
		}

		// Totals

		setTotals({
			followers: totalFollowers,
			following: totalFollowing,
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
		const _followers = sessionStorage.getItem('followers');
		const _following = sessionStorage.getItem('following');

		if (_followers) setFollowers(JSON.parse(_followers));
		if (_following) setFollowing(JSON.parse(_following));
	}, []);

	return (
		<InfoContext.Provider
			value={{
				following,
				followers,
				accounts,
				accountsFiltered,
				totals,
				page,
				filter,
				search,
				setFollowing: gatedSetFollowing,
				setFollowers: gatedSetFollowers,
				isFollowing,
				isFollowers,
				setPage: gatedSetPage,
				setFilter: gatedSetFilter,
				setSearch: gatedSetSearch,
			}}>
			{children}
		</InfoContext.Provider>
	);
};
const InfoContext = createContext({
	following: {},
	followers: [],
	accounts: [],
	accountsFiltered: [],
	totals: {
		followers: 0,
		following: 0,
		filtered: 0,
		_: 0,
	},
	page: 0,
	filter: '',
	search: '',
	setFollowing: (content: ItfExportFollowing) => {},
	setFollowers: (content: ItfExport[]) => {},
	isFollowing: (content: ItfExport[] | ItfExportFollowing): boolean => false,
	isFollowers: (content: ItfExport[] | ItfExportFollowing): boolean => false,
	setPage: (p: number) => {},
	setFilter: (f: ItfFilterTypes) => {},
	setSearch: (f: string) => {},
});

const useInfo = () => {
	return useContext(InfoContext);
};
export { InfoProvider, useInfo };

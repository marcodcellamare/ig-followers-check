import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import Config from '@config';
import { ItfData, ItfExport, ItfExportFollowing } from '@interfaces/scheme';

const InfoProvider = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
	const [followers, setFollowers] = useState<ItfExport[]>();
	const [following, setFollowing] = useState<ItfExportFollowing>();
	const [accounts, setAccounts] = useState([]);
	const [totals, setTotals] = useState({
		followers: 0,
		following: 0,
		_: 0,
	});

	const gatedSetFollowers = useCallback((content: ItfExport[]) => {
		setFollowers(content);
	}, []);

	const gatedSetFollowing = useCallback((content: ItfExportFollowing) => {
		setFollowing(content);
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
		if (
			following &&
			isFollowing(following) &&
			followers &&
			isFollowers(followers)
		) {
			const followingFlatten = flatten({
				data: following,
				root: Config.data.following.root,
				info: Config.data.following.info,
			});
			const followersFlatten = flatten({
				data: followers,
				root: Config.data.followers.root,
				info: Config.data.followers.info,
			});
			let merged = [];

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
					a.followingTimestamp - b.followingTimestamp
			);

			setAccounts(merged);
			setTotals({
				followers: followersFlatten.length,
				following: followingFlatten.length,
				_: merged.length,
			});
		}
	}, [followers, following, isFollowers, isFollowing]);

	return (
		<InfoContext.Provider
			value={{
				following,
				followers,
				accounts,
				totals,
				setFollowing: gatedSetFollowing,
				setFollowers: gatedSetFollowers,
				isFollowing,
				isFollowers,
			}}>
			{children}
		</InfoContext.Provider>
	);
};
const InfoContext = createContext({
	following: {},
	followers: [],
	accounts: [],
	totals: {},
	setFollowing: (content: ItfExportFollowing) => {},
	setFollowers: (content: ItfExport[]) => {},
	isFollowing: (content: ItfExport[] | ItfExportFollowing): boolean => false,
	isFollowers: (content: ItfExport[] | ItfExportFollowing): boolean => false,
});

const useInfo = () => {
	return useContext(InfoContext);
};
export { InfoProvider, useInfo };

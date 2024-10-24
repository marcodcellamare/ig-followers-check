import { useEffect, useState } from 'react';
import { Ban, CheckCircle } from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Config from '@config';
import { ItfData, ItfExport } from '@interfaces/scheme';

// Users that you follow
import following from '@assets/data/following.json';

// Users that follows your profile
import followers from '@assets/data/followers_1.json';

const Match = ({
	page = 0,
	filter,
	setTotals = () => {},
}: {
	page: number;
	filter?: string;
	setTotals: ({
		followers,
		following,
		_,
	}: {
		followers: number;
		following: number;
		_: number;
	}) => void;
}) => {
	const { i18n } = useTranslation();
	const [accounts, setAccounts] = useState([]);

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

		merged = merge({ merged, data: followingFlatten, type: 'following' });
		merged = merge({ merged, data: followersFlatten, type: 'followers' });

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
	}, [setTotals]);

	return (
		<section>
			<Helmet>
				<title>{i18n.t('MATCH')}</title>
			</Helmet>
			{accounts.length > 0 ? (
				<table className='table table-sm table-hover'>
					<thead>
						<tr>
							<th
								scope='col'
								className='text-end pe-2'
								style={{ width: '1px' }}>
								#
							</th>
							<th scope='col'>{i18n.t('ID')}</th>
							<th
								scope='col'
								style={{ width: '1px' }}>
								{i18n.t('FOLLOWERS')}
							</th>
							<th
								scope='col'
								style={{ width: '1px' }}>
								{i18n.t('FOLLOWING')}
							</th>
						</tr>
					</thead>
					<tbody>
						{accounts
							.slice(
								Config.itemsPerPage * page,
								Config.itemsPerPage * page + Config.itemsPerPage
							)
							.map((account, k) => {
								return (
									<tr
										key={k}
										className={
											!account.followers
												? 'table-warning'
												: ''
										}>
										<th
											scope='row'
											className='text-end pe-2 small'>
											{k + 1 + Config.itemsPerPage * page}
										</th>
										<td>
											<a
												href={account.href}
												target='_blank'
												rel='noreferrer'
												className={`fw-bold${
													!account.followers
														? ' text-danger'
														: ''
												}`}>
												{account.value}
											</a>
										</td>
										<td className='text-nowrap'>
											{account.followers ? (
												<CheckCircle />
											) : (
												<Ban className='text-danger' />
											)}
											{account.followersDate ? (
												<span className='small ms-1'>
													{
														account.followersDate
															.toISOString()
															.split('T')[0]
													}
												</span>
											) : null}
										</td>
										<td className='text-nowrap'>
											{account.following ? (
												<CheckCircle />
											) : (
												<Ban className='text-danger' />
											)}
											{account.followingDate ? (
												<span className='small ms-1'>
													{
														account.followingDate
															.toISOString()
															.split('T')[0]
													}
												</span>
											) : null}
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			) : null}
		</section>
	);
};
export default Match;

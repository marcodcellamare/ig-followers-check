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
	const [accounts, setAccounts] = useState({});

	const flatten = ({ data, root, info }) => {
		return (root && Array.isArray(data[root]) ? data[root] : data)
			.map((r: ItfExport) => r[info])
			.flat(1)
			.reverse();
	};
	const merge = ({ merged, data, type }) => {
		data.forEach((d: ItfData) => {
			if (!merged[d.value])
				merged[d.value] = {
					following: false,
					followers: false,
				};

			merged[d.value] = {
				...merged[d.value],
				...d,
				[type]: true,
			};
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
		let merged = {};

		merged = merge({ merged, data: followingFlatten, type: 'following' });
		merged = merge({ merged, data: followersFlatten, type: 'followers' });

		Object.keys(merged).forEach((k) => {
			merged[k].date = new Date(merged[k].timestamp * 1000);
		});
		setAccounts(merged);
		setTotals({
			followers: followersFlatten.length,
			following: followingFlatten.length,
			_: Object.keys(merged).length,
		});
	}, [setTotals]);

	//page

	return (
		<section>
			<Helmet>
				<title>{i18n.t('MATCH')}</title>
			</Helmet>
			{Object.keys(accounts).length > 0 ? (
				<table className='table table-sm table-hover'>
					<thead>
						<tr>
							<th
								scope='col'
								className='text-end pe-2'
								style={{ width: '1px' }}>
								#
							</th>
							<th
								scope='col'
								className='pe-2'
								style={{ width: '1px' }}>
								{i18n.t('DATE')}
							</th>
							<th scope='col'>{i18n.t('ID')}</th>
							<th
								scope='col'
								className='text-center'
								style={{ width: '1px' }}>
								{i18n.t('FOLLOWERS')}
							</th>
							<th
								scope='col'
								className='text-center'
								style={{ width: '1px' }}>
								{i18n.t('FOLLOWING')}
							</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(accounts)
							.slice(
								Config.itemsPerPage * page,
								Config.itemsPerPage * page + Config.itemsPerPage
							)
							.map((k, j) => {
								return (
									<tr
										key={k}
										className={
											!accounts[k].followers
												? 'table-warning'
												: ''
										}>
										<th
											scope='row'
											className='text-end pe-2 small'>
											{j + 1 + Config.itemsPerPage * page}
										</th>
										<td className='pe-2 text-nowrap small'>
											{
												accounts[k].date
													.toISOString()
													.split('T')[0]
											}
										</td>
										<td>
											<a
												href={accounts[k].href}
												target='_blank'
												rel='noreferrer'
												className={`fw-bold${
													!accounts[k].followers
														? ' text-danger'
														: ''
												}`}>
												{accounts[k].value}
											</a>
										</td>
										<td className='text-center'>
											{accounts[k].followers ? (
												<CheckCircle />
											) : (
												<Ban className='text-danger' />
											)}
										</td>
										<td className='text-center'>
											{accounts[k].following ? (
												<CheckCircle />
											) : (
												<Ban className='text-danger' />
											)}
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

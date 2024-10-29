import { useEffect, useState } from 'react';
import {
	Ban,
	CheckCircle,
	Clock,
	ClockHistory,
	ExclamationTriangle,
	Eye,
	Hash,
	HourglassSplit,
	Star,
	XCircle,
	XLg,
} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Config from '@config';
import { timestampToDate } from '@utils/Utils';
import { ItfData } from '@interfaces/scheme';
import axios from 'axios';

const Account = ({ k, account }: { k: number; account: ItfData }) => {
	const { i18n } = useTranslation();
	const { page, clicked, userDataClicked } = useInfo();
	const [seniority, setSeniority] = useState(0);

	useEffect(() => {
		axios
			.get(account.href, { responseType: 'document' })
			.then((r) => {
				console.log(r);
			})
			.catch((err) => {
				console.error(err.message, account.href);
			});

		if (
			!account.info._?._ &&
			account.info.following?._ &&
			account.info.following?.timestamp
		) {
			const today = new Date();

			setSeniority(
				Math.round(
					(today.getTime() -
						timestampToDate(
							account.info.following?.timestamp
						).getTime()) /
						(1000 * 3600 * 24)
				)
			);
		}
		return () => setSeniority(0);
	}, [account]);

	return account ? (
		<tr
			className={
				account.info.blocked_users?._
					? 'table-danger'
					: account.info.dismissed_suggested_users?._ &&
					  !account.info._?._
					? 'table-secondary'
					: !account.info._?._
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
						account.info.dismissed_suggested_users?._ &&
						!account.info._?._
							? ' text-secondary'
							: !account.info._?._
							? ' text-danger'
							: ''
					}${
						userDataClicked.includes(account.value)
							? ' px-1 border border-2 border-info'
							: ''
					}`}
					onClick={(e) => {
						clicked(account.value);
						//e.preventDefault();
					}}>
					{userDataClicked.includes(account.value) ? (
						<Eye className='me-1 text-info' />
					) : null}
					{seniority >= Config.data.getOld ? (
						<ExclamationTriangle className='me-1 text-danger' />
					) : null}
					{account.value}
				</a>
				{seniority >= Config.data.getOld ? (
					<>
						<br />
						<small className='text-muted'>
							{i18n.t('OLDER_THAN', {
								days: seniority,
							})}
						</small>
					</>
				) : null}
			</td>
			<td className='text-nowrap'>
				{account.info.blocked_users?._ ||
				account.info.close_friends?._ ||
				account.info.following_hashtags?._ ||
				account.info.follow_requests_sent?._ ||
				account.info.permanent_follow_requests?._ ||
				account.info.unfollowed_users?._ ||
				account.info.dismissed_suggested_users?._ ? (
					<ul className='list-inline text-end my-0'>
						{account.info.blocked_users?._ ? (
							<li className='list-inline-item'>
								<span className='badge text-bg-danger'>
									<Ban className='me-1' />
									{i18n.t('BLOCKED')}
								</span>
							</li>
						) : null}
						{account.info.close_friends?._ ? (
							<li className='list-inline-item'>
								<span className='badge text-bg-primary'>
									<Star className='me-1' />
									{i18n.t('CLOSE_FRIEND')}
								</span>
							</li>
						) : null}
						{account.info.following_hashtags?._ ? (
							<li className='list-inline-item'>
								<span className='badge text-bg-warning'>
									<Hash className='me-1' />
									{i18n.t('HASHTAG')}
								</span>
							</li>
						) : null}
						{account.info.follow_requests_sent?._ ? (
							<li className='list-inline-item'>
								<span className='badge text-bg-warning'>
									<HourglassSplit className='me-1' />
									{i18n.t('PENDING')}
								</span>
							</li>
						) : null}
						{account.info.permanent_follow_requests?._ ? (
							<li className='list-inline-item'>
								<span className='badge text-bg-info'>
									<Clock className='me-1' />
									{i18n.t('RECENT')}
								</span>
							</li>
						) : null}
						{account.info.unfollowed_users?._ ? (
							<li className='list-inline-item'>
								<span className='badge text-bg-secondary'>
									<ClockHistory className='me-1' />
									{i18n.t('RECENTLY_UNFOLLOWED')}
								</span>
							</li>
						) : null}
						{account.info.dismissed_suggested_users?._ ? (
							<li className='list-inline-item'>
								<span className='badge text-bg-secondary'>
									<XLg className='me-1' />
									{i18n.t('DISMISSED_SUGGESTION')}
								</span>
							</li>
						) : null}
					</ul>
				) : null}
			</td>
			<td className='text-nowrap'>
				{account.info._?._ ? (
					<CheckCircle className='text-success' />
				) : (
					<XCircle className='text-danger' />
				)}
				{account.info._?.timestamp ? (
					<span className='small ms-1 text-muted'>
						{
							timestampToDate(account.info._?.timestamp)
								.toISOString()
								.split('T')[0]
						}
					</span>
				) : null}
			</td>
			<td className='text-nowrap'>
				{account.info.following?._ ? (
					<CheckCircle className='text-success' />
				) : (
					<XCircle className='text-danger' />
				)}
				{account.info.following?.timestamp ? (
					<span className='small ms-1 text-muted'>
						{
							timestampToDate(account.info.following?.timestamp)
								.toISOString()
								.split('T')[0]
						}
					</span>
				) : null}
			</td>
		</tr>
	) : null;
};
export default Account;

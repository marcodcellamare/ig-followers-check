import { useCallback, useEffect, useRef, useState } from 'react';
import {
	Ban,
	CheckCircle,
	Clock,
	ClockHistory,
	ExclamationTriangle,
	Eye,
	HandThumbsDownFill,
	HandThumbsUpFill,
	Hash,
	HourglassSplit,
	Star,
	ThreeDots,
	XCircle,
	XLg,
} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Rating from '@components/Misc/Rating';
import Config from '@config';
import { timestampToDate } from '@utils/Utils';
import { ItfData } from '@interfaces/scheme';

const Account = ({ k, account }: { k: number; account: ItfData }) => {
	const { i18n } = useTranslation();
	const { page, clicked, visited, getRate } = useInfo();
	const [seniority, setSeniority] = useState({
		v: false,
		d: 0,
		h: 0,
		m: 0,
		s: 0,
	});
	const timer = useRef(null);

	const diff = useCallback(() => {
		const today = new Date();
		const ms = Math.abs(
			timestampToDate(account.info.following?.timestamp).getTime() -
				today.getTime()
		);
		const diff = {
			v: true,
			d: Math.floor(ms / (1000 * 60 * 60 * 24)),
			h: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			m: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
			s: Math.floor((ms % (1000 * 60)) / 1000),
		};
		setSeniority(diff);
	}, [account.info.following?.timestamp]);

	const reset = () => {
		clearInterval(timer.current);
		setSeniority({
			v: false,
			d: 0,
			h: 0,
			m: 0,
			s: 0,
		});
	};

	const ignore = useCallback(() => {
		return (
			account.info.blocked_users?._ ||
			account.info.dismissed_suggested_users?._ ||
			account.info.unfollowed_users?._ ||
			account.info.following_hashtags?._ ||
			(account.info.follow_requests_sent?._ && !account.info._?._)
		);
	}, [
		account.info._?._,
		account.info.blocked_users?._,
		account.info.dismissed_suggested_users?._,
		account.info.unfollowed_users?._,
		account.info.following_hashtags?._,
		account.info.follow_requests_sent?._,
	]);

	const icons = useCallback(() => {
		if (ignore()) {
			return <Ban className='text-danger' />;
		}
		if (seniority.v) {
			if (seniority.d < Config.data.getOld) {
				switch (getRate(account.value)) {
					case 1:
						return <HandThumbsDownFill className='text-danger' />;

					case 5:
						return <HandThumbsUpFill className='text-success' />;

					default:
						return <ThreeDots className='text-secondary' />;
				}
			} else {
				switch (getRate(account.value)) {
					case 5:
						return <HandThumbsUpFill className='text-success' />;

					default:
						return <HandThumbsDownFill className='text-danger' />;
				}
			}
		} else {
			return <HandThumbsUpFill className='text-success' />;
		}
	}, [account.value, ignore, seniority.v, seniority.d, getRate]);

	useEffect(() => {
		clearInterval(timer.current);

		if (
			!account.info._?._ &&
			account.info.following?._ &&
			account.info.following?.timestamp
		) {
			timer.current = setInterval(diff, 1000);
			diff();
		}
		return () => reset();
	}, [
		diff,
		account.info._?._,
		account.info.following?._,
		account.info.following?.timestamp,
	]);

	return account ? (
		<tr
			className={
				ignore()
					? 'table-secondary'
					: getRate(account.value) === 1
					? 'table-danger'
					: getRate(account.value) === 5
					? 'table-success'
					: !account.info._?._
					? 'table-warning'
					: ''
			}>
			<th
				scope='row'
				className='text-end pe-2 small'>
				{k + 1 + Config.itemsPerPage * page}
			</th>
			<td className='text-nowrap'>
				{!ignore() ? <Rating username={account.value} /> : null}
			</td>
			<td>
				<span className='me-1'>{icons()}</span>
				<a
					href={account.href}
					target='_blank'
					rel='noreferrer'
					className={`fw-bold${
						ignore()
							? ' text-secondary'
							: !account.info._?._
							? ' text-danger'
							: ''
					}${
						visited.includes(account.value)
							? ' px-1 border border-2 border-info'
							: ''
					}`}
					onMouseDown={() => clicked(account.value)}>
					{visited.includes(account.value) ? (
						<Eye className='me-1 text-info' />
					) : null}
					{account.value}
				</a>
				{seniority.v ? (
					<>
						<br />
						<small
							className={
								seniority.d >= Config.data.getOld
									? 'text-danger'
									: 'text-muted'
							}>
							{seniority.d >= Config.data.getOld ? (
								<ExclamationTriangle className='me-1' />
							) : null}
							{i18n.t('OLDER_THAN', {
								days: seniority.d,
								hours: seniority.h,
								minutes: seniority.m,
								seconds: seniority.s,
								DAYS: i18n
									.t('DAYS', { count: seniority.d })
									.toLowerCase(),
								HOURS: i18n
									.t('HOURS', { count: seniority.h })
									.toLowerCase(),
								MINUTES: i18n
									.t('MINUTES', { count: seniority.m })
									.toLowerCase(),
								SECONDS: i18n
									.t('SECONDS', { count: seniority.s })
									.toLowerCase(),
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

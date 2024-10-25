import { useEffect, useState } from 'react';
import { Ban, CheckCircle, ExclamationTriangle } from 'react-bootstrap-icons';
import { useInfo } from '@providers/info';
import Config from '@config';
import { ItfData } from '@interfaces/scheme';

const Account = ({ k, account }: { k: number; account: ItfData }) => {
	const { page } = useInfo();
	const [older, setOlder] = useState(false);

	useEffect(() => {
		if (!account.followers && account.following && account.followingDate) {
			const date = new Date();
			date.setDate(date.getDate() - 14);

			setOlder(account.followingDate < date);
		}
		return () => setOlder(false);
	}, [account]);

	return account ? (
		<tr className={!account.followers ? 'table-warning' : ''}>
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
						!account.followers ? ' text-danger' : ''
					}`}>
					{older ? (
						<ExclamationTriangle className='me-1 text-danger' />
					) : null}
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
						{account.followersDate.toISOString().split('T')[0]}
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
						{account.followingDate.toISOString().split('T')[0]}
					</span>
				) : null}
			</td>
		</tr>
	) : null;
};
export default Account;

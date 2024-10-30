import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Account from './Account';

const Accounts = () => {
	const { i18n } = useTranslation();
	const { accountsFiltered } = useInfo();

	return (
		<section className='my-4'>
			<Helmet>
				<title>{i18n.t('ACCOUNTS')}</title>
			</Helmet>
			{accountsFiltered.length > 0 ? (
				<div className='table-responsive'>
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
									style={{ width: '1px' }}>
									{i18n.t('RATING')}
								</th>
								<th scope='col'>{i18n.t('ID')}</th>
								<th
									scope='col'
									style={{ width: '1px' }}
								/>
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
							{accountsFiltered.map((account, k) => {
								return (
									<Account
										key={k}
										k={k}
										account={account}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				<p className='fw-bold text-danger'>{i18n.t('NO_RESULTS')}</p>
			)}
		</section>
	);
};
export default Accounts;

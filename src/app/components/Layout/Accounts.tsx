import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Account from './Account';

const Accounts = () => {
	const { i18n } = useTranslation();
	const { accountsFiltered } = useInfo();

	return (
		<section>
			<Helmet>
				<title>{i18n.t('ACCOUNTS')}</title>
			</Helmet>
			{accountsFiltered.length > 0 ? (
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
			) : null}
		</section>
	);
};
export default Accounts;

import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Header from './Header';
import Accounts from './Accounts';
import Pagination from '@components/Misc/Pagination';
import Reset from '@components/Misc/Reset';
import Alert from './Alert';

const Layout = () => {
	const { i18n } = useTranslation();
	const { totals, userData } = useInfo();

	return (
		<div className='app'>
			<main className='container'>
				<Header />
				{totals._ > 0 ? (
					<section>
						<div className='row g-1 py-3'>
							<div className='col'>
								<Reset />
							</div>
							<div className='col-auto'>
								<Pagination />
							</div>
						</div>
					</section>
				) : null}
				{Object.keys(userData).length > 0 ? (
					<>
						<hr />
						<Accounts />
						<hr />
					</>
				) : (
					<Alert />
				)}
				<section className='my-4'>
					<div className='row g-1 d-flex align-items-center'>
						<div className='col'>
							<p className='small fw-bold my-0'>
								{i18n.t('FOOTER')}:{' '}
								<a
									href={i18n.t('REPO')}
									target='_blank'
									rel='noreferrer'>
									GitHub
								</a>
							</p>
						</div>
						<div className='col-auto'>
							{totals._ > 0 ? <Pagination /> : null}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};
export default Layout;

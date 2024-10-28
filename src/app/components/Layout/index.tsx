import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Header from './Header';
import Accounts from './Accounts';
import Pagination from '@components/Misc/Pagination';
import Reset from '@components/Misc/Reset';

const Layout = () => {
	const { i18n } = useTranslation();
	const { totals, userData } = useInfo();

	return (
		<div className='app'>
			<main className='container'>
				<Header />
				{totals._ > 0 ? (
					<section className='overflow-hidden'>
						<div className='row g-1 my-3'>
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
				) : null}
				<section className='overflow-hidden'>
					<div className='row g-1 d-flex align-items-center mt-3 mb-5'>
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

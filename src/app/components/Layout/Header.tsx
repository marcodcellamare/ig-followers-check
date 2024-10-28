import Package from '@package';
import { Instagram, Link45deg } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Pagination from '@components/Misc/Pagination';
import Reset from '@components/Misc/Reset';
import File from '@components/Misc/File';
import Filter from '@components/Misc/Filter';
import Search from '@components/Misc/Search';
import { ItfFilterTypes } from '@interfaces/scheme';

const Header = () => {
	const { i18n } = useTranslation();
	const { totals, setFilter, setSearch, filter, zipToUserData } = useInfo();

	const types: ItfFilterTypes[] = [
		'followers',
		'following',
		'not_followers',
		'',
	];
	const color = (t: ItfFilterTypes) => {
		switch (t) {
			case 'followers':
				return 'success';

			case 'following':
				return 'warning';

			case 'not_followers':
				return 'danger';

			default:
				return 'secondary';
		}
	};
	return (
		<header className='overflow-hidden'>
			<div className='row d-flex align-items-center my-5'>
				<div className='col-12 col-lg-5 col-xxl-7 pe-xl-5'>
					<div className='row d-flex align-items-center mb-3 mb-lg-0 text-primary'>
						<div className='col-auto'>
							<span className='d-block position-relative'>
								<Instagram className='display-1' />
								<span className='position-absolute top-50 start-50 translate-middle badge rounded-pill bg-danger'>
									v{Package.version}
								</span>
							</span>
						</div>
						<div className='col'>
							<h1 className='fw-bold lh-1 my-0'>
								{i18n.t('TITLE')}
							</h1>
						</div>
					</div>
				</div>
				<div className='col-12 col-lg'>
					{totals._ > 0 ? (
						<div className='row g-1'>
							{types.map((type, k) => {
								return (
									<div
										key={k}
										className='col-6 col-sm-3'>
										<div className='d-grid h-100'>
											<Filter
												type={type}
												label={i18n.t(
													type
														? type.toUpperCase()
														: 'ALL'
												)}
												color={color(type)}
												total={
													!type
														? totals._
														: totals[type]
												}
												active={filter === type}
												onClick={(t) => {
													setFilter(t);
												}}
											/>
										</div>
									</div>
								);
							})}
							<div className='col-12'>
								<Search
									label={i18n.t('SEARCH')}
									onChange={(q) => {
										setSearch(q);
									}}
								/>
							</div>
						</div>
					) : null}
				</div>
			</div>
			{totals._ === 0 ? (
				<>
					<div className='row my-5'>
						<div className='col-12'>
							<div className='alert alert-primary my-0'>
								<div className='row'>
									<div className='col-12 col-md-9'>
										<p>{i18n.t('DESCRIPTION')}</p>
										<p className='small my-0'>
											{i18n.t('IG_DATA')}
											<a
												href={i18n.t('IG_DATA_LINK')}
												target='_blank'
												rel='noreferrer'
												className='ms-1'>
												<Link45deg />
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row gy-3'>
						<div className='col-12'>
							<File
								label={i18n.t('ZIP_FILE')}
								accept='.zip'
								onFileSelected={(file) => {
									zipToUserData(file);
								}}
							/>
						</div>
					</div>
				</>
			) : null}
		</header>
	);
};
export default Header;

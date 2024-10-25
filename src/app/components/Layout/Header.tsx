import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import Pagination from '@components/Misc/Pagination';
import Reset from '@components/Misc/Reset';
import File from '@components/Misc/File';
import Filter from '@components/Misc/Filter';
import Search from '@components/Misc/Search';
import {
	ItfExport,
	ItfExportFollowing,
	ItfFilterTypes,
} from '@interfaces/scheme';
import { Instagram } from 'react-bootstrap-icons';

const Header = () => {
	const { i18n } = useTranslation();
	const { totals, setFollowers, setFollowing, setFilter, setSearch, filter } =
		useInfo();

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
		<header>
			<div className='row d-flex align-items-center'>
				<div className='col-12 col-xl-auto pe-xl-5'>
					<h1 className='display-4 fw-bold mb-3 mb-xl-0'>
						<Instagram className='me-2 me-md-4' />
						<small>{i18n.t('TITLE')}</small>
					</h1>
				</div>
				<div className='col-12 col-xl'>
					{totals._ > 0 ? (
						<div className='row g-1'>
							{types.map((type, k) => {
								return (
									<div
										key={k}
										className='col-3'>
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
														: type ===
														  'not_followers'
														? totals._ -
														  totals.followers
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
			<hr />
			{totals._ === 0 ? (
				<div className='row gy-3'>
					<div className='col-12 col-md-6'>
						<File
							type='followers'
							label={i18n.t('FOLLOWERS')}
							onFileSelected={(content: ItfExport[]) => {
								setFollowers(content);
							}}
						/>
					</div>
					<div className='col-12 col-md-6'>
						<File
							type='following'
							label={i18n.t('FOLLOWING')}
							onFileSelected={(content: ItfExportFollowing) => {
								setFollowing(content);
							}}
						/>
					</div>
				</div>
			) : (
				<div className='row g-2'>
					<div className='col'>
						<Pagination />
					</div>
					<div className='col-auto'>
						<Reset />
					</div>
				</div>
			)}
			<hr />
		</header>
	);
};
export default Header;

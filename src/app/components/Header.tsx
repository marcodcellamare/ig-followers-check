import { useTranslation } from 'react-i18next';

const Header = ({
	totals,
	setFilter = () => {},
}: {
	totals: {
		followers: number;
		following: number;
		_: number;
	};
	setFilter: (f?: string) => void;
}) => {
	const { i18n } = useTranslation();

	return (
		<header>
			<div className='row'>
				<div className='col-12 col-lg-auto pe-lg-5'>
					<h1>{i18n.t('TITLE')}</h1>
				</div>
				<div className='col-12 col-lg'>
					<div className='row'>
						<div className='col-3 text-success'>
							<strong>{i18n.t('FOLLOWERS')}</strong>
							<br />
							{totals.followers}
						</div>
						<div className='col-3 text-warning'>
							<strong>{i18n.t('FOLLOWING')}</strong>
							<br />
							{totals.following}
						</div>
						<div className='col-3 text-danger'>
							<strong>{i18n.t('NOT_FOLLOWERS')}</strong>
							<br />
							{totals._ - totals.followers}
						</div>
						<div className='col-3'>
							<strong>{i18n.t('ALL')}</strong>
							<br />
							{totals._}
						</div>
					</div>
				</div>
			</div>
			<hr />
		</header>
	);
};
export default Header;

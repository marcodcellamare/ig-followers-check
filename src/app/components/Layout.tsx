import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Layout = () => {
	const { i18n } = useTranslation();

	return (
		<>
			<Helmet>
				<title>culo</title>
			</Helmet>
			<div className='app'>
				<main className='container'>
					<div>LAYOUT</div>
				</main>
			</div>
		</>
	);
};
export default Layout;

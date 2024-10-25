import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { InfoProvider } from '@providers/info';
import Layout from '@components/Layout';
import '@styles/main.scss';

const App = () => {
	const { i18n } = useTranslation();

	return (
		<>
			<Helmet
				titleTemplate={'%s - ' + i18n.t('TITLE')}
				defaultTitle={i18n.t('TITLE')}
				htmlAttributes={{ lang: i18n.language }}
			/>
			<InfoProvider>
				<Layout />
			</InfoProvider>
		</>
	);
};
export default App;

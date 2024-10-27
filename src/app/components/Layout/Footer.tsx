import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { i18n } = useTranslation();

	return (
		<footer className='my-4 overflow-hidden'>
			<p className='small fw-bold'>
				{i18n.t('FOOTER')}:{' '}
				<a
					href={i18n.t('REPO')}
					target='_blank'
					rel='noreferrer'>
					GitHub
				</a>
			</p>
		</footer>
	);
};
export default Footer;

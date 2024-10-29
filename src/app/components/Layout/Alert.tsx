import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import File from '@components/Misc/File';

const Alert = () => {
	const { i18n } = useTranslation();
	const { zipToUserData } = useInfo();
	const [instructions, setInstructions] = useState([]);

	useEffect(() => {
		const _instructions = i18n.t('instructions', { returnObjects: true });

		if (Array.isArray(_instructions)) setInstructions(_instructions);
	}, [i18n]);

	return (
		<section className='alert alert-primary my-4'>
			<p className='lead'>{i18n.t('DESCRIPTION')}</p>
			<a
				href={i18n.t('IG_DATA_LINK')}
				target='_blank'
				rel='noreferrer'
				className='ms-1 fw-bold'>
				{i18n.t('IG_DATA')}
			</a>
			<ol className='small'>
				{instructions.map((i, k) => {
					return <li key={k}>{i}</li>;
				})}
			</ol>
			<hr />
			<File
				label={i18n.t('ZIP_FILE')}
				accept='.zip'
				onFileSelected={(file) => {
					zipToUserData(file);
				}}
			/>
		</section>
	);
};
export default Alert;

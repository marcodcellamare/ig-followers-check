import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import { v4 as uuidv4 } from 'uuid';
import { ItfExport, ItfExportFollowing } from '@interfaces/scheme';

const File = ({
	type = '',
	label,
	accept = '.json',
	onFileSelected,
}: {
	type?: '' | 'following' | 'followers';
	label: string;
	accept?: string;
	onFileSelected: (content: ItfExport[] | ItfExportFollowing) => void;
}) => {
	const { i18n } = useTranslation();
	const { isFollowing, isFollowers } = useInfo();
	const [id, setId] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target && e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();

			reader.onload = (r) => {
				try {
					if (typeof r.target.result === 'string') {
						const content: ItfExport[] | ItfExportFollowing =
							JSON.parse(r.target.result);

						switch (type) {
							case 'followers':
								if (!isFollowers(content))
									throw Object.assign(
										new Error(
											i18n.t('NOT_FOLLOWERS_ERROR')
										),
										{
											code: 406,
										}
									);
								break;

							case 'following':
								if (!isFollowing(content))
									throw Object.assign(
										new Error(
											i18n.t('NOT_FOLLOWING_ERROR')
										),
										{
											code: 406,
										}
									);
								break;

							default:
						}
						onFileSelected(content);
					}
				} catch (err) {
					console.error(err);
					alert(err);
				}
			};
			reader.onerror = (err) => {
				console.error(err);
			};
			reader.readAsText(file, 'UTF-8');
		}
	};

	useEffect(() => {
		setId(uuidv4());
	}, []);

	return (
		<>
			<label
				htmlFor={id}
				className='form-label'>
				{label}
			</label>
			<input
				id={id}
				type='file'
				className='form-control'
				accept={accept}
				onChange={onChange}
			/>
		</>
	);
};
export default File;

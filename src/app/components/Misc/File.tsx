import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const File = ({
	label,
	accept = '.zip',
	onFileSelected,
}: {
	label: string;
	accept?: string;
	onFileSelected: (file: File) => void;
}) => {
	const [id, setId] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target && e.target.files && e.target.files[0]) {
			onFileSelected(e.target.files[0]);
		}
	};

	useEffect(() => {
		setId(uuidv4());
	}, []);

	return (
		<>
			<label
				htmlFor={id}
				className='form-label fw-bold small'>
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

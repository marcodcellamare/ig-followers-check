import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const File = ({
	label,
	accept = '.zip',
	hidden = false,
	clickTrigger = '',
	onFileSelected,
}: {
	label?: string;
	accept?: string;
	hidden?: boolean;
	clickTrigger?: string;
	onFileSelected: (file: File) => void;
}) => {
	const [id, setId] = useState('');
	const ref = useRef(null);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target && e.target.files && e.target.files[0]) {
			onFileSelected(e.target.files[0]);
		}
	};

	useEffect(() => {
		setId(uuidv4());
	}, []);

	useEffect(() => {
		if (clickTrigger) {
			ref.current.click();
		}
	}, [clickTrigger]);

	return (
		<>
			{label ? (
				<label
					htmlFor={id}
					className='form-label fw-bold small'
					hidden={hidden}>
					{label}
				</label>
			) : null}
			<input
				id={id}
				ref={ref}
				type='file'
				className={`form-control${hidden ? ' d-none' : ''}`}
				accept={accept}
				onChange={onChange}
			/>
		</>
	);
};
export default File;

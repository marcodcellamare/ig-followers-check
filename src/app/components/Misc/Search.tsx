import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Search = ({
	label,
	onChange,
}: {
	label: string;
	onChange: (q: string) => void;
}) => {
	const [id, setId] = useState('');

	useEffect(() => {
		setId(uuidv4());
	}, []);

	return (
		<div className='form-floating'>
			<input
				className='form-control'
				id={id}
				placeholder={label}
				onChange={(e) => {
					onChange(e.target.value);
				}}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};
export default Search;

import { useInfo } from '@providers/info';
import { XLg } from 'react-bootstrap-icons';

const Reset = () => {
	const { setUserData, setPage, setFilter, setSearch, name, openLink } =
		useInfo();

	return (
		<button
			className='btn btn-sm btn-danger text-truncate'
			style={{ maxWidth: '300px' }}
			title={name}
			onClick={() => {
				setUserData({});
				setPage(0);
				setFilter('');
				setSearch('');
				openLink();
			}}>
			<XLg className='me-1' />
			<small>{name}</small>
		</button>
	);
};
export default Reset;

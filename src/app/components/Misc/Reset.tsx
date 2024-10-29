import { useInfo } from '@providers/info';
import { XLg } from 'react-bootstrap-icons';

const Reset = () => {
	const {
		setUserData,
		setPage,
		setFilter,
		setSearch,
		userDataName,
		clicked,
	} = useInfo();

	return (
		<button
			className='btn btn-sm btn-danger text-truncate'
			style={{ maxWidth: '300px' }}
			title={userDataName}
			onClick={() => {
				setUserData({});
				setPage(0);
				setFilter('');
				setSearch('');
				clicked();
			}}>
			<XLg className='me-1' />
			<small>{userDataName}</small>
		</button>
	);
};
export default Reset;

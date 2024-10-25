import { useInfo } from '@providers/info';
import { XLg } from 'react-bootstrap-icons';

const Reset = () => {
	const { setFollowers, setFollowing, setPage } = useInfo();

	return (
		<button
			className='btn btn-sm btn-danger'
			onClick={() => {
				setFollowers([]);
				setFollowing({});
				setPage(0);
			}}>
			<XLg />
		</button>
	);
};
export default Reset;

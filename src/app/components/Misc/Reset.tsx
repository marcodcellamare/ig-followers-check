import { useInfo } from '@providers/info';
import { XLg } from 'react-bootstrap-icons';

const Reset = () => {
	const { setUserData, setPage } = useInfo();

	return (
		<button
			className='btn btn-sm btn-danger'
			onClick={() => {
				setUserData({});
				setPage(0);
			}}>
			<XLg />
		</button>
	);
};
export default Reset;

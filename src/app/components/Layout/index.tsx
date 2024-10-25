import Header from './Header';
import Accounts from './Accounts';

const Layout = () => {
	return (
		<div className='app py-3'>
			<main className='container'>
				<Header />
				<Accounts />
			</main>
		</div>
	);
};
export default Layout;

import Match from './Match';
import Header from './Header';

const Layout = () => {
	return (
		<div className='app py-3'>
			<main className='container'>
				<Header />
				<Match />
			</main>
		</div>
	);
};
export default Layout;

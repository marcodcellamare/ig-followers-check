import Header from './Header';
import Accounts from './Accounts';
import Footer from './Footer';

const Layout = () => {
	return (
		<div className='app'>
			<main className='container'>
				<Header />
				<Accounts />
				<Footer />
			</main>
		</div>
	);
};
export default Layout;

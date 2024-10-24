import { useCallback, useState } from 'react';
import Match from './Match';
import Header from './Header';

const Layout = () => {
	const [totals, setTotals] = useState({
		followers: 0,
		following: 0,
		_: 0,
	});
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState('');

	const gatedSetTotals = useCallback(
		({
			followers,
			following,
			_,
		}: {
			followers: number;
			following: number;
			_: number;
		}) => {
			setTotals({
				followers,
				following,
				_,
			});
		},
		[]
	);
	const gatedSetFilter = useCallback((f?: string) => {
		setFilter(f);
	}, []);

	return (
		<div className='app py-3'>
			<main className='container'>
				<Header
					totals={totals}
					setFilter={gatedSetFilter}
				/>
				<Match
					page={page}
					filter={filter}
					setTotals={gatedSetTotals}
				/>
			</main>
		</div>
	);
};
export default Layout;

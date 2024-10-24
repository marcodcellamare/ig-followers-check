import { useCallback, useState } from 'react';
import Match from './Match';
import Header from './Header';
import Pagination from './Pagination';

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
	const gatedSetPage = useCallback((p?: number) => {
		setPage(p);
	}, []);
	const gatedSetFilter = useCallback((f?: string) => {
		setFilter(f);
	}, []);

	return (
		<div className='app py-3'>
			<main className='container'>
				<Header
					totals={totals}
					setFilter={gatedSetFilter}>
					<Pagination
						page={page}
						total={totals._}
						setPage={gatedSetPage}
					/>
				</Header>
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

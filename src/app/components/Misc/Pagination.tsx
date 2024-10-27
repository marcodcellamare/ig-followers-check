import { useEffect, useState } from 'react';
import { useInfo } from '@providers/info';
import Config from '@config';
import {
	ChevronDoubleLeft,
	ChevronDoubleRight,
	ChevronLeft,
	ChevronRight,
} from 'react-bootstrap-icons';

const Pagination = () => {
	const { totals, page, setPage } = useInfo();
	const [pages, setPages] = useState(0);
	const [pagesArray, setPagesArray] = useState([]);

	useEffect(() => {
		let _pagesArray = [];
		const _pages = Math.ceil(totals.filtered / Config.itemsPerPage);
		const _start =
			page > Math.round(Config.pagination / 2) - 1
				? page - Math.round(Config.pagination / 2) + 1
				: 0;
		const _end =
			page <= _pages - Math.round(Config.pagination / 2) &&
			_pages >= Config.pagination
				? _start + Config.pagination
				: _pages;

		if (_end > _start) {
			for (let k = _start; k < _end; k++) {
				_pagesArray.push(k);
			}
		}
		setPages(_pages);
		setPagesArray(_pagesArray);
	}, [totals.filtered, page]);

	return pagesArray.length > 1 ? (
		<nav>
			<ul className='pagination pagination-sm font-monospace my-0'>
				<li className={`page-item${page === 0 ? ' disabled' : ''}`}>
					<button
						className='page-link'
						onClick={() => setPage(0)}>
						<ChevronDoubleLeft />
					</button>
				</li>
				<li className={`page-item${page === 0 ? ' disabled' : ''}`}>
					<button
						className='page-link'
						onClick={() => setPage(page - 1)}>
						<ChevronLeft />
					</button>
				</li>
				{pagesArray.map((p) => {
					return (
						<li
							key={p}
							className={`page-item${
								page === p ? ' active' : ''
							}`}>
							<button
								className='page-link small'
								onClick={() => setPage(p)}>
								{p + 1 < 10 ? 0 : ''}
								{p + 1}
							</button>
						</li>
					);
				})}
				<li
					className={`page-item${
						page === pages - 1 ? ' disabled' : ''
					}`}>
					<button
						className='page-link'
						onClick={() => setPage(page + 1)}>
						<ChevronRight />
					</button>
				</li>
				<li
					className={`page-item${
						page === pages - 1 ? ' disabled' : ''
					}`}>
					<button
						className='page-link'
						onClick={() => setPage(pages - 1)}>
						<ChevronDoubleRight />
					</button>
				</li>
			</ul>
		</nav>
	) : null;
};
export default Pagination;

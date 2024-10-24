import Config from '@config';
import {
	ChevronDoubleLeft,
	ChevronDoubleRight,
	ChevronLeft,
	ChevronRight,
} from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

const Pagination = ({
	page,
	total,
	setPage = () => {},
}: {
	page: number;
	total: number;
	setPage: (p?: number) => void;
}) => {
	const [pages, setPages] = useState(0);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(0);
	const [pagesArray, setPagesArray] = useState([]);

	useEffect(() => {
		setPages(Math.ceil(total / Config.itemsPerPage));
	}, [total]);

	useEffect(() => {
		setStart(
			page > Math.round(Config.pagination / 2)
				? page - Math.round(Config.pagination / 2)
				: 0
		);
	}, [page]);

	useEffect(() => {
		setEnd(
			page <= pages - Math.round(Config.pagination / 2)
				? start + Config.pagination
				: pages
		);
	}, [page, start, pages]);

	useEffect(() => {
		let _pagesArray = [];

		if (end > start) {
			for (let k = start; k < end; k++) {
				_pagesArray.push(k);
			}
		}
		setPagesArray(_pagesArray);
	}, [start, end, pages, page, total]);

	return (
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
	);
};
export default Pagination;

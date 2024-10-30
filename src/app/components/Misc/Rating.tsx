import { useCallback, useState } from 'react';
import { useInfo } from '@providers/info';
import { Star, StarFill } from 'react-bootstrap-icons';

const Rating = ({ username }: { username: string }) => {
	const stars = [0, 1, 2, 3, 4];
	const { getRate, setRate } = useInfo();
	const [over, setOver] = useState(false);
	const [tempRate, setTempRate] = useState(0);

	const onHover = (over: boolean, k?: number) => {
		setTempRate(over && k ? k : 0);
		setOver(over);
	};
	const onClick = useCallback(
		(k: number) => {
			const rate = getRate(username);

			setRate(username, rate !== k ? k : 0);
		},
		[getRate, setRate, username]
	);

	const color = useCallback(() => {
		if (!over) {
			switch (getRate(username)) {
				case 1:
					return 'danger';

				case 2:
					return 'warning';

				case 3:
					return 'primary';

				case 4:
					return 'info';

				case 5:
					return 'success';

				default:
					return 'secondary';
			}
		}
		return 'secondary';
	}, [getRate, username, over]);

	return (
		<div className='rating text-nowrap'>
			{stars.map((k) => {
				return (
					<button
						key={k}
						className={`btn btn-sm btn-link text-${color()}${
							!over && !getRate(username) ? ' opacity-20' : ''
						} p-0 d-inline lh-1`}
						onMouseEnter={() => onHover(true, k + 1)}
						onMouseLeave={() => onHover(false)}
						onClick={() => onClick(k + 1)}>
						{(over && k < tempRate) ||
						(!over && k < getRate(username)) ? (
							<StarFill />
						) : (
							<Star />
						)}
					</button>
				);
			})}
		</div>
	);
};
export default Rating;

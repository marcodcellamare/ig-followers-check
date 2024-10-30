import { useCallback, useEffect, useState } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';

const Rating = ({
	defaultRate = 0,
	onChange,
}: {
	defaultRate: number;
	onChange: (k: number) => void;
}) => {
	const stars = [0, 1, 2, 3, 4];
	const [over, setOver] = useState(false);
	const [tempRate, setTempRate] = useState(0);
	const [rate, setRate] = useState(0);

	const onHover = (over: boolean, k?: number) => {
		setTempRate(over && k ? k : 0);
		setOver(over);
	};
	const onClick = (k: number) => {
		setRate((prevRate) => {
			const newRate = prevRate !== k ? k : 0;
			onChange(newRate);

			return newRate;
		});
	};

	const color = useCallback(() => {
		if (!over) {
			switch (rate) {
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
	}, [rate, over]);

	useEffect(() => {
		setRate(defaultRate);
	}, [defaultRate]);

	return (
		<div
			className={`rating text-nowrap text-${color()}${
				!over && !rate ? ' opacity-20' : ''
			} small`}>
			{stars.map((k) => {
				return (
					<span
						key={k}
						className='pe-1'
						onMouseEnter={() => onHover(true, k + 1)}
						onMouseLeave={() => onHover(false)}
						onClick={() => onClick(k + 1)}>
						{(over && k < tempRate) || (!over && k < rate) ? (
							<StarFill />
						) : (
							<Star />
						)}
					</span>
				);
			})}
		</div>
	);
};
export default Rating;

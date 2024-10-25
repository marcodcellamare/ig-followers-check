import { ItfFilterTypes } from '@interfaces/scheme';

const Filter = ({
	type = '',
	label,
	color,
	total,
	active,
	onClick,
}: {
	type: ItfFilterTypes;
	label: string;
	color: string;
	total: number;
	active: boolean;
	onClick: (t: ItfFilterTypes) => void;
}) => {
	return (
		<button
			className={`btn btn${
				!active ? '-outline' : ''
			}-${color} text-start`}
			disabled={active}
			onClick={() => {
				onClick(type);
			}}>
			<strong>{label}</strong>
			<br />
			{total}
		</button>
	);
};
export default Filter;

import { useEffect, useState } from 'react';

const useSandbox = (): boolean => {
	const [sandbox, setSendbox] = useState(null);

	useEffect(() => {
		setSendbox(process.env.NODE_ENV === 'development');
	}, []);

	return sandbox;
};
export default useSandbox;

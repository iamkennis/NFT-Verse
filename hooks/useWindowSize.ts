import { useState, useEffect } from 'react';


interface Props {
	width: any;
	height: any; 
}
export default function useWindowSize() {

	function getSize(): Props {
		return {
			width: typeof window !== 'undefined' && window.innerWidth,
			height: typeof window !== 'undefined' && window.innerHeight,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}

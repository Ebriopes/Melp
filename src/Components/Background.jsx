import React		from 'react';
import useStyle		from '../Styles/MaterialStyles';
import background	from '../Images/background.jpeg';

function Background () {

	const style = useStyle();

	return (
		<img
			src={ background }
			className={ style.bkgPage }
			alt='background'
		/>
	);
};

export default Background;

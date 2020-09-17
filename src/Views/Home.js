import React			from 'react';
import ShowRestaurants	from '../Components/ShowRestaurants';
import useStyle			from '../Styles/MaterialStyles';

import {
	Container,
	Typography,
} from '@material-ui/core';

function Home() {

	const style = useStyle();

	return (
		<Container>

			<div className={style.homeText}>

				<Typography variant="h3">
					Find a excelent place to relax while you feed
				</Typography>

			</div>

			<ShowRestaurants/>

		</Container>
	)
};

export default Home;

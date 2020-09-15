import React			from 'react';
import ShowRestaurants	from '../Components/ShowRestaurants';
import {
	Container,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles( () => ( {
	textPrincipal: {
		textShadow: '0 0 8px #000',
		color: 'floralwhite',
		margin: '15vh auto',
		textAlign: 'center',
	}
}));

function Home() {
	const classes = useStyle();

	return (
		<Container>

			<div className={classes.textPrincipal}>
				<Typography variant="h3">
					Find a excelent place to relax while you feed
				</Typography>
			</div>

			<ShowRestaurants/>

		</Container>
	)
};

export default Home;

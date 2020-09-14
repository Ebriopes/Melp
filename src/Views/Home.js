import React			from 'react';
import ShowRestaurants	from '../Components/ShowRestaurants';
import {
	Container,
	makeStyles,
	Typography,
} from '@material-ui/core';

const navHeight = 64;

const useStyle = makeStyles(() => ({
	container: {
		height: `calc( 100vh - ${navHeight}px )`,
	},
	textPrincipal: {
		width: '70%',
		color: 'whitesmoke',
		margin: '15px auto',
		textAlign: 'center',
	}
}))

function Home() {
	const classes = useStyle();

	return (
		<Container className={classes.container}>
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

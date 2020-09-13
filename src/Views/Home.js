import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const navHeight = 64;

const useStyle = makeStyles(() => ({
	container: {
		height: `calc( 100vh - ${navHeight}px )`,
	},
	textPrincipal: {
		color: 'whitesmoke',
	}
}))

function Home() {
	const classes = useStyle();

	return (
		<Container className={classes.container}>
			<Typography variant="h1" className={classes.textPrincipal}>
				Find a excelent place to relax while you feed
			</Typography>
		</Container>
	)
};

export default Home;

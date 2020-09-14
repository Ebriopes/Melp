import React from 'react';
import {
	AppBar,
	Button,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles( ( ) => ( {
	appbar: {
		position: 'static',
		color: 'coral',
		boxShadow: 'none',
		fontFamily: 'Lobster',
	},
	title: {
		flexGrow: '1',
		fontFamily: 'inherit',
	},
	btn: {
		color: 'inherit',
		fontFamily: 'inherit',
		fontSize: 'larger',
		textTransform: 'capitalize',
	},
} ) );

function Navbar () {
	const classes = useStyle();

	return (
		<AppBar className={ classes.appbar } color='transparent'>
			<Toolbar>
				<Typography className={classes.title} variant="h4"> 
					Melp
				</Typography>
				<Button className={classes.btn}>home</Button>
				<Button className={classes.btn}>map</Button>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar;
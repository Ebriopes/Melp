import React from 'react';
import { NavLink } from 'react-router-dom';

import {
	AppBar,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles( ( ) => ( {
	navBar: {
		position: 'static',
		color: 'coral',
		boxShadow: 'none',
		fontFamily: 'Lobster',
		textShadow: '0 0 8px #000',
	},
	navTitle: {
		flexGrow: '1',
		fontFamily: 'inherit',
	},
	navLink: {
		color: 'inherit',
		margin: '0 10px',
		fontSize: 'larger',
		fontFamily: 'inherit',
		textShadow: 'inherit',
		textTransform: 'capitalize',
		textDecoration: 'none',
	},
} ) )

function Navbar () {

	const style = useStyle();

	return ( 
		<AppBar className={ style.navBar } color='transparent'>
			<Toolbar>
				<Typography className={ style.navTitle } variant="h4">
					Melp
				</Typography>
				<NavLink to='/Melp/home' activeStyle={ { color: 'orangered' } } className={ style.navLink }>home</NavLink>
				<NavLink to='/Melp/maps' activeStyle={ { color: 'orangered' } } className={ style.navLink }>map</NavLink>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar;

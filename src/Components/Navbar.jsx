import React from 'react';
import { NavLink } from 'react-router-dom';

import {
	AppBar,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

/* import useStyle from '../Styles/MaterialStyles';
 */

const useStyle = makeStyles( ( theme ) => ( {
	bkgPage: {
		maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0))',
		objectFit: 'cover',
		position: 'absolute',
		zIndex: '-1',
		height: '100vh',
		width: '100%',
	},
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

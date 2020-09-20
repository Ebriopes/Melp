import useStyle from '../Styles/MaterialStyles';
import { NavLink } from 'react-router-dom';
import React from 'react';

import {
	AppBar,
	Toolbar,
	Typography,
} from '@material-ui/core';

function Navbar () {

	const style = useStyle();

	return (
		<AppBar className={ style.navBar } color='transparent'>
			<Toolbar>
				<Typography className={ style.navTitle } variant="h4">
					Melp
				</Typography>
				<NavLink to='/home' activeStyle={ { color: 'orangered' } } className={ style.navLink }>home</NavLink>
				<NavLink to='/maps' activeStyle={ { color: 'orangered' } } className={ style.navLink }>map</NavLink>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar;

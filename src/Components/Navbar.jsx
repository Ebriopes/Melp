import React from 'react';
import useStyle from '../Styles/MaterialStyles';
import { NavLink } from 'react-router-dom';
import background	from '../Images/background.jpeg';

import {
	AppBar,
	Toolbar,
	Typography,
} from '@material-ui/core';

function Navbar () {

	const style = useStyle();

	return ( <>
		<img
			src={ background }
			className={ style.bkgPage }
			alt='background'
		/>
		<AppBar className={ style.navBar } color='transparent'>
			<Toolbar>
				<Typography className={ style.navTitle } variant="h4">
					Melp
				</Typography>
				<NavLink to='/Melp/home' activeStyle={ { color: 'orangered' } } className={ style.navLink }>home</NavLink>
				<NavLink to='/Melp/maps' activeStyle={ { color: 'orangered' } } className={ style.navLink }>map</NavLink>
			</Toolbar>
		</AppBar></>
	)
};

export default Navbar;

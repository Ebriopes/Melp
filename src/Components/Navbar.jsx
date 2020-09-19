import React 	from 'react';
import useStyle from '../Styles/MaterialStyles';

import {
	AppBar,
	Button,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

function Navbar () {

	const style = useStyle();

	return (
		<AppBar className={ style.navBar } color='transparent'>
			<Toolbar>
				<Typography className={style.navTitle} variant="h4"> 
					Melp
				</Typography>
				<Button className={style.navBtn}>home</Button>
				<Button className={style.navBtn}>map</Button>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar;

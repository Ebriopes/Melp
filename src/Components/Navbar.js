import React from 'react';
import { Search as SearchIcon, } 	from '@material-ui/icons';
import {
	AppBar,
	fade,
	InputBase,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

const navHeight = 64;

const useStyle = makeStyles( ( theme ) => ( {
	appbar: {
		backgroundColor: "#00bcd4aa",
		color: "whitesmoke",
		shadow: "none",
		height: `${navHeight}px`,
	},
	search: {
		position: 'relative',
		alignContent: 'center',
		borderRadius: theme.shape.borderRadius,
		marginRight: theme.spacing( 2 ),
		marginLeft: 0,
		width: '100%',
		[ theme.breakpoints.up( 'sm' ) ]: {
			marginLeft: theme.spacing( 3 ),
			width: 'auto',
		},
		backgroundColor: fade( theme.palette.common.white, 0.15 ),
		'&:hover': {
			backgroundColor: fade( theme.palette.common.white, 0.25 ),
		},
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing( 1, 1, 1, 0 ),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${ theme.spacing( 4 ) }px)`,
		transition: theme.transitions.create( 'width' ),
		width: '100%',
		[ theme.breakpoints.up( 'md' ) ]: {
			width: '20ch',
		},
	},
} ) );

function Navbar () {
	const classes = useStyle();

	return (
		<AppBar className={ classes.appbar } position="sticky">
			<Toolbar>

				<Typography variant="h4"> MELP </Typography>

				<div className={ classes.search }>
					
					<InputBase
						placeholder="Search"
						classes={ {
							root: classes.inputRoot,
							input: classes.inputInput,
						} }
						inputProps={ { 'aria-label': 'search' } }
					/>

					<SearchIcon fontSize="large" />

				</div>

			</Toolbar>
		</AppBar>
	)
};

export default Navbar;
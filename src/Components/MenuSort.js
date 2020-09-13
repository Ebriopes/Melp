import { Button, ButtonGroup, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { SortContext } from '../Contexts/SortContext';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	  '& > *': {
		  margin: theme.spacing(1),
		},
	},
	group: {
		backgroundColor: 'aqua',
		padding: " 2px",
		verticalAlign: "baseline",
		borderRadius: '5px',
	},
	labelText: {
		padding: "0 5px",
	},
}));

function Menu() {
	const {sortBase, setSortBase} = useContext(SortContext);
	const [ ratingToggle, setRatingToggle ] = useState(false);
	const [ alphaToggle, setAlphaToggle ] = useState(false);
	
	const classes = useStyles();
	
	const SortAlpha = () => {
		const sortAlpha = () => 
			sortBase.sort((a,b) => {
				if ( a.name > b.name ) {
					return -1;
				} else if ( a.name < b.name ) {
					return 1;
				} else {
					return 0;
				}
			});
			console.info(alphaToggle)
			setAlphaToggle(!alphaToggle);
			console.info(alphaToggle)
		alphaToggle ? setSortBase(sortAlpha()) : setSortBase(sortAlpha().reverse())
	}
	
	const SortRating = () => {
		
		const sortRating = () => sortBase.sort((a,b) => b.rating - a.rating );
	
		setRatingToggle(!ratingToggle);
		ratingToggle ? setSortBase(sortRating()) : setSortBase(sortRating().reverse())
	};


	return (
		<Container className={classes.root}>
			<div className={classes.group}>
				<Typography className={classes.labelText} display="inline">
					Sort the results: 
				</Typography>
				<ButtonGroup display="inline">
					<Button onClick={SortRating}>Rating</Button>
					<Button onClick={SortAlpha}>Name</Button>
				</ButtonGroup>
			</div>
		</Container>
	)
}

export default Menu

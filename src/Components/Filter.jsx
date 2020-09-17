import React, { useState } from 'react';

import {
	Button,
	ButtonGroup,
	makeStyles,
} from '@material-ui/core';

const useStyle = makeStyles( () => ( {
	menu: {
		display:		'flex',
		width:			'fit-content',
		marginLeft:		'auto',
		marginRight:	'5px',
		backgroundColor:'beige',
	},
	cards:{
		display:	'flex',
		flexWrap:	'wrap',
	},
	btn:{
		backgroundColor: 'inherit',
	},
} ) );

function Filter ( { data, setData, showR } ) {
	const [ rating, setRating ] = useState( false );
	const [ alpha, setAlpha ] = useState( false );
	const classes = useStyle();

	const sortRating = () => {

		const sort = () => data.sort( ( a, b ) => b.rating - a.rating );

		setRating( !rating );

		rating ?
			setData( sort() ) :
			setData( sort().reverse() );
		console.info( data )
	};

	const sortAlpha = () => {

		const sort = () =>

			data.sort( ( a, b ) => {
				if ( a.name > b.name ) {

					return -1;

				} else if ( a.name < b.name ) {
					
					return 1;

				} else {
					
					return 0;

				}
			} );

		setAlpha( !alpha );

		alpha ?
			setData( sort() ) :
			setData( sort().reverse() );
	}

	return (
		<div>
			<ButtonGroup variant='contained' color='inherit' className={ classes.menu }>
				<Button onClick={ sortRating } className={classes.btn}>Rating</Button>
				<Button onClick={ sortAlpha } className={classes.btn}>Name</Button>
			</ButtonGroup>
			<div className={classes.cards}>
				{showR(data)}
			</div>
		</div>
	)
}

export default Filter;
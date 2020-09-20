import React, { useContext, useRef, useState }	from 'react';
import { RestaurantContext }	from '../Contexts/RestaurantContext';

import {
	Button,
	ButtonGroup,
	ClickAwayListener,
	makeStyles,
	MenuItem,
	MenuList,
	Paper,
	Popper,
} from '@material-ui/core';

const useStyle = makeStyles( {
	filterGroup: {
		display:		'flex',
		width:			'fit-content',
		marginLeft:		'auto',
		marginRight:	'5px',
		backgroundColor:'beige',
	},
	filterBtn:{
		backgroundColor:'inherit',
		color:			'orangered',
	},
});

function Filter ( ) {
	const { sortAlpha, sortRating, showCards, setShowCards }= useContext(RestaurantContext);
	const [ open, setOpen ]	= useState( false );
	const	anchorRef		= useRef( null );
	
	const style = useStyle();

	const mountCards = ( event ) => {
		
		handleClose( event );
		
		setShowCards( event.target.value );
	};

	const handleToggle = () => setOpen( !open );
	
	const handleClose = event => {

		if ( anchorRef.current && anchorRef.current.contains( event.target ) ) return;

		setOpen( false );
	};

	return (<>
		<ButtonGroup variant='contained' className={ style.filterGroup }>
			<Button
				ref={ anchorRef }
				onClick={ handleToggle }
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				className={style.filterBtn}
			>
				Show: { showCards }
			</Button>
			<Button onClick={ sortAlpha } className={ style.filterBtn }>
				Name
			</Button>
			<Button onClick={ sortRating } className={ style.filterBtn }>
				Rating
			</Button>
		</ButtonGroup>

		{/* Menu list pop */}
		<Popper
			open={ open }
			anchorEl={ anchorRef.current }
			role={ undefined }
			placement='bottom-end'
			transition
			disablePortal
		>
			<Paper>
			<ClickAwayListener onClickAway={ handleClose }>
				<MenuList>
					<MenuItem onClick={ mountCards } value={10}>10</MenuItem>
					<MenuItem onClick={ mountCards } value={20}>20</MenuItem>
					<MenuItem onClick={ mountCards } value={40}>40</MenuItem>
					<MenuItem onClick={ mountCards } value={60}>60</MenuItem>
					<MenuItem onClick={ mountCards } value={80}>80</MenuItem>
					<MenuItem onClick={ mountCards } value={100}>100</MenuItem>
				</MenuList>
			</ClickAwayListener>
			</Paper>
		</Popper></>	
	);
};

export default Filter;

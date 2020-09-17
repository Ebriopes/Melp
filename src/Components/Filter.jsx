import React, { useContext }	from 'react';
import { RestaurantContext }	from '../Contexts/RestaurantContext';
import useStyle 				from '../Styles/MaterialStyles';

import {
	Button,
	ButtonGroup,
} from '@material-ui/core';

function Filter ( ) {
	const { sortAlpha, sortRating } = useContext(RestaurantContext);
	const style = useStyle();

	return (
		<ButtonGroup variant='contained' className={ style.filterGroup }>
			<Button onClick={ sortAlpha } className={ style.filterBtn }>
				Name
			</Button>
			<Button onClick={ sortRating } className={ style.filterBtn }>
				Rating
			</Button>
		</ButtonGroup>
	);
};

export default Filter;
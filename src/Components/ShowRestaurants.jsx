import React, { useContext }	from 'react';
import { RestaurantContext }	from '../Contexts/RestaurantContext';
import useStyle 				from '../Styles/MaterialStyles';
import RestaurantCard 			from './RestaurantCard';
import Filter					from './Filter';

import { 
	CircularProgress,
	Typography 
}	from '@material-ui/core';

/* Function will show a response depend of data base state */
const loading = ( baseData, styles ) => {
	if ( baseData === null || baseData === undefined ) {
		
		return <Typography variant='h2' align='center' color='error'>
					Oh, no!<br/>
					There isn't restaurants 😞
				</Typography>

	} else if ( baseData.length === 0 ){
		return <CircularProgress size={80} thickness={5} className={styles.load}/>
	}else{
		return renderRestaurants(baseData)
	}
};

/* Function will render all cards */
const renderRestaurants = ( baseData, styles ) => {
	
	return ( 
		<div className={ styles.cards }>
			{baseData.map( 
				( restaurant ) => 
					<RestaurantCard {...restaurant} /> )}
		</div>
	)
}

function ShowRestaurants () {
	/* Call the data base from Context */
	const { restaurantData } = useContext(RestaurantContext);
	
	/* Set the object styles for the cards */
	const style = useStyle();

	return (
		<React.Fragment>
			<Filter/>
			{loading( restaurantData, style )}
		</React.Fragment>
	)
};

export default ShowRestaurants;
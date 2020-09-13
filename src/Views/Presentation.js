import React, { useEffect, useState }	from 'react';
import { CircularProgress, Container } 	from '@material-ui/core';
import RestaurantService 				from '../Services/RestaurantService';
import RestaurantCard 					from '../Components/RestaurantCard';

function Presentation ( ) {
	const [restaurants, setRestaurants] = useState([]);

	const showRestaurants = () => {
		if ( restaurants.length === 0 ) {
			return <CircularProgress/>
		} else {
			console.info(restaurants)
			//return restaurants.forEach((restaurant) => <RestaurantCard {...restaurant}/>)
			return <RestaurantCard {...restaurants}/>
		}
	};
	
	useEffect(() => {
		try{
			RestaurantService()
			.then((data) => {
				setRestaurants(data[1])
			})
		}catch (error){
			console.error(error);
		}
	},[]);
	
	return (
		<Container>
			{showRestaurants()}
		</Container>
	)
};

export default Presentation;
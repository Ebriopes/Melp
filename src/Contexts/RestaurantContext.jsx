import React, { createContext, useEffect, useState } from 'react';
import RestaurantService from '../Services/RestaurantService';

export const RestaurantContext = createContext();

const RestaurantContextProvider = (props) => {
	const [ restaurantData, setRestaurantData ] = useState([]);
	const [ rating,			setRating ]			= useState( false );
	const [ alpha,			setAlpha ]			= useState( false );

	const sortRating = () => {

		const sort = () => restaurantData.sort( ( a, b ) => b.rating - a.rating );

		setRating( !rating );

		rating ?
			setRestaurantData( sort() ) :
			setRestaurantData( sort().reverse() );
	};

	const sortAlpha = () => {

		const sort = () =>
			restaurantData.sort( ( a, b ) => {
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
			setRestaurantData( sort() ) :
			setRestaurantData( sort().reverse() );
	}

	useEffect( () => {
		RestaurantService()
		.then( ( dataBase ) => setRestaurantData( dataBase ) )
	}, []);

	return (
		<RestaurantContext.Provider 
			value={{
				restaurantData,
				setRestaurantData,
				sortAlpha,
				sortRating,
				}}>
			{props.children}
		</RestaurantContext.Provider>
	)
}

export default RestaurantContextProvider;
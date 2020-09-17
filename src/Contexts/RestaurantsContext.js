import React, { createContext, useEffect, useState } from 'react';

export const RestaurantsContext = createContext();

const RestaurantContextProvider = (props) => {
	const [ restaurantData, setRestaurantData ] = useState([]);

	useEffect( () => {
		RestaurantService()
		.then( ( dataBase ) => setRestaurantData( dataBase ) )
	}, []);

	return (
		<RestaurantsContext.Provider value={{restaurantData, setRestaurantData}}>
			{props.children}
		</RestaurantsContext.Provider>
	)
}

export default RestaurantContextProvider;
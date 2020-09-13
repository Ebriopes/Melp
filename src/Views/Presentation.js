import React, { useEffect, useContext }	from 'react';
import { CircularProgress, Container }	from '@material-ui/core';
import RestaurantService 				from '../Services/RestaurantService';
import RestaurantCard 					from '../Components/RestaurantCard';
import MenuSort							from '../Components/MenuSort';
import { SortContext } 					from '../Contexts/SortContext';

function Presentation ( ) {
	const {sortBase, setSortBase} = useContext(SortContext);

	const showRestaurants = () => {
		if ( sortBase.length === 0 ) {
			return <CircularProgress/>
		} else {
			console.info(sortBase)
			return <React.Fragment>
					{sortBase.reduce((prev,restaurant) => 
					<> 
						{prev} 
						<RestaurantCard {...restaurant}/> 
					</>,<></>)}
				</React.Fragment>
		}
	};
	
	useEffect(() => {
		try{
			RestaurantService()
			.then((data) => {
				setSortBase(data)
			})
		}catch (error){
			console.error(error);
		}
	},[]);
	
	return (
		<Container>
			<MenuSort/>
			{showRestaurants()}
		</Container>
	)
};

export default Presentation;
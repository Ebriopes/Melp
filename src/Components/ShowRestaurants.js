import React, { useEffect, useState }	from 'react';
import { CircularProgress }				from '@material-ui/core';
import RestaurantService 				from '../Services/RestaurantService';
import RestaurantCard 					from './RestaurantCard';
import Filter							from './Filter';

function Presentation () {
	const [ data, setData ] = useState([]);

	const showRestaurants = (base) => {
		return <React.Fragment>
				{base.reduce((prev,restaurant) => 
					<> 
						{prev} 
						<RestaurantCard {...restaurant}/> 
					</>,<></>)}
				</React.Fragment>
	};
	
	useEffect(() =>{
		RestaurantService().then((dataBase)=> setData(dataBase))
	}, []);

	return (
		<React.Fragment>
			{data.length === 0 ? 
				<CircularProgress/> : 
				<Filter data={data} setData={setData} showR={showRestaurants}/>
			}
		</React.Fragment>
	)
};

export default Presentation;
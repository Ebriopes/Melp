import React, { useEffect, useState }	from 'react';
import { CircularProgress, makeStyles, Typography }	from '@material-ui/core';
import RestaurantService 				from '../Services/RestaurantService';
import RestaurantCard 					from './RestaurantCard';
import Filter							from './Filter';

const useStyle = makeStyles( () => ( {
	progress: {
		display: 'block',
		color: 'coral',
		margin: '30px auto',
	}
} ) );

function Presentation () {
	const [ data, setData ] = useState( [ ] );
	const classes = useStyle();

	const showRestaurants = ( baseData ) => {
		return <React.Fragment>

				{baseData.reduce( ( prev, restaurant ) =>
					<> 
						{prev} 
						<RestaurantCard {...restaurant}/> 
					</>,<></>)}

				</React.Fragment>
	};

	const loading = ( baseData ) => {
		if ( baseData === null ){

			return <><Typography variant='h2' align='center' color='error'>
						Oh, no!<br/>
						There isn't restaurants 😞
					</Typography>
					<CircularProgress size={80} thickness={5} className={classes.progress}/></>

		} else if ( baseData.length === 0 ){

			return <CircularProgress/>

		}else{
			
			return <Filter data={data} setData={setData} showR={showRestaurants}/>

		}
	};
	
	useEffect( () => {
		RestaurantService()
		.then( ( dataBase ) => setData( dataBase ) )
	}, []);

	return (
		<React.Fragment>
			{loading( data )}
		</React.Fragment>
	)
};

export default Presentation;
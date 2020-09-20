import React, { useContext } from 'react';
import { RestaurantContext } from '../Contexts/RestaurantContext';
import GoogleMapReact	from 'google-map-react';
import LocationPin		from './LocationPin';

function Map ( { location } ) {
	const { restaurantData } = useContext( RestaurantContext );
	
	const renderMap = () => {
		const pins = restaurantData.slice( 0, 10 )
			.map( ( restaurant, index ) => {
				const _address = restaurant.address
				const textAddress = `${ _address.street }, ${ _address.city } ${ _address.state }`
				const _location = _address.location
				
				return < LocationPin key={ index }
					lat={ _location.lat }
					lng={ _location.lng }
					text={ textAddress }/>
			} );
		
		return (
			<GoogleMapReact
				bootstrapURLKeys={ { key: 'AIzaSyCgh7VhcMzuVnFiEcSliGle_IvuODaBf0s' } }
				defaultCenter={ location }
				defaultZoom={15}
			>
				{ pins }
			</GoogleMapReact>
		)
	}

	return (
		<div style={{height: '80vh', width: '80vw', margin: '20px auto auto'}}>
			{renderMap()}
		</div>
	)
}

export default Map;

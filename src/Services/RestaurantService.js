import Axios from 'axios';

function RestaurantService () {
	try {
		//Correct URL: https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json
		return Axios.get( "https://ebriopes.firebaseio.com/ebriopes.json" )
			.then( ( { data } ) => data );
	} catch ( error ) {
		console.error( error );
	}
}

export default RestaurantService;
import Axios from 'axios';

async function RestaurantService () {
	try {
		//Correct URL: https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json
		const { data } = await Axios.get( "https://ebriopes.firebaseio.com/ebriopes.json")
		return data;
	} catch ( error ) {
		console.error( error )
	}
}

export default RestaurantService;
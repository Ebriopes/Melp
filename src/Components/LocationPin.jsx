import { PinDrop }	from '@material-ui/icons';
import React 		from 'react';

function LocationPin ( { text } ) {
	return (
		<div>
			<PinDrop fontSize='large' style={ { color: 'darkcyan' } }/>
			{/* <h1>{ text }</h1> */}
		</div>
	)
}

export default LocationPin;

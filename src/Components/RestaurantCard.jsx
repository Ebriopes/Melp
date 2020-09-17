import React 	from 'react';
import useStyle from '../Styles/MaterialStyles';

import {
	Card,
	CardContent,
	CardHeader,
	Typography,
} from '@material-ui/core';

const comment = ( rating, style ) => {
	let phrase;

	switch (rating) {
		case 0:
			phrase = <span>Terrible!</span>;
			break;
		case 1:
			phrase = <>Bad<br/>Preferably avoid this place</>;
			break;
		case 2:
			phrase = <>Regular<br/>You can try your lucky</>;
			break;
		case 3:
			phrase = <>Good<br/>Nice to go frecuently</>;
			break;
		case 4:
			phrase = <>Exelent restaurant<br/>We recommend you make a reservation</>;
			break;
		default:
			break;
	};

	return phrase;
};

const stars = ( rating, style ) => (
	<>
		{<div>{Array( 5 ).fill().map( ( _, i ) => 
			<span role="img" aria-label="star" key={ Math.random() }>
				{rating >= i ? '🌟' : '☆' }	
			</span>)}</div>}
		{comment( rating, style )}</>
);

function Restaurant ( { address, contact, name, rating } ) {
	const style = useStyle();
	
	return (
		<Card raised={true} className={style.card}>
			<CardHeader title={ name } subheader={stars( rating, style )} className={style.cardheader}/>
			<CardContent>
				
				<Typography variant="body1">
					{ address.street }, { address.city }, { address.state }
				</Typography>
				<br/>

				<Typography variant="caption">
					Phone: { contact.phone } <br/>
				</Typography>
				<Typography variant="caption">
					Email: { contact.email } <br/>
				</Typography>
				<Typography variant="caption">
					Website: { contact.site } 
				</Typography>
			</CardContent>
		</Card>
	)
};

export default Restaurant;
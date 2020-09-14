import React from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles(() => ({
	card: {
		margin: '20px auto',
		width: '300px',
		height: '300px',
	},
}))

function Restaurant ( { address, contact, name, rating } ) {
	const classes = useStyle();

	const comment = () => {
		let phrase = '';
	
		switch (rating) {
			case 0:
				phrase = 'BAD place';
				break;
			case 1:
				phrase = 'Be careful here, don\'t is good';
				break;
			case 2:
				phrase = 'Regular';
				break;
			case 3:
				phrase = 'Good, nice place';
				break;
			case 4:
				phrase = 'Exelent restaurant, we recommend make a reservation';
				break;
			default:
				break;
		};
	
		return phrase;
	};
	
	const stars = () => 
		Array( 5 ).fill().map( ( _, i ) => 
			<span role="img" aria-label="star" key={ Math.random() }>
				{rating >= i ? '🌟' : '☆' }
			</span>)

	return (
		<Card raised={true} className={classes.card}>
			<CardHeader title={ name } subheader={stars()}/>
			<CardContent>
				<Typography variant="subtitle">
					{comment()}
				</Typography>
				<Typography variant="overline">
					{ address.street }, 
				</Typography>
				<Typography variant="overline">
					{ address.city }, { address.state }
				</Typography>
				<br/>
				<Typography variant="body2">
					Phone: { contact.phone }
				</Typography>
				<Typography variant="body2">
					Email: { contact.email }
				</Typography>
				<Typography variant="body2">
					Website: { contact.site } 
				</Typography>
			</CardContent>
		</Card>
	)
};

export default Restaurant;
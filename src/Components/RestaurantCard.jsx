import React, { useState }	from 'react';

import {
	ExpandMore as ExpandMoreIcon,
	Favorite as FavoriteIcon,
	Share as ShareIcon,
} from '@material-ui/icons';

import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Collapse,
	IconButton,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles( (theme) => ({
	card: {
		margin:	'20px auto',
		width:	'300px',
		padding:'0 10px',
	},
	cardHeaderSub: {
		display: 'flex',
	},
	cardHeaderTitle: {
		height: '64px',
	},
	cardSubheader: {
		marginLeft: 'auto',
		marginRight: '10px',
	},
	cardContent: {
		height: '72px',
	},
	expand: {
		transform:	'rotate(0deg)',
		marginLeft:	'auto',
		transition:	theme.transitions.create( 'transform', {
			duration:	theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
} ) )

const comment = ( rating, style ) => {
	let phrase;

	switch (rating) {
		case 0:
			phrase =<span className={style.cardSubheader}>
						Terrible!
					</span>;
			break;
		case 1:
			phrase =<span className={style.cardSubheader}>
						Bad
					</span>;
			break;
		case 2:
			phrase =<span className={style.cardSubheader}>
						Regular
					</span>;
			break;
		case 3:
			phrase =<span className={style.cardSubheader}>
						Good
					</span>;
			break;
		case 4:
			phrase =<span className={style.cardSubheader}>
						Exelent restaurant
					</span>;
			break;
		default:
			break;
	};

	return phrase;
};

const stars = ( rating, style ) => (
	<React.Fragment>
		{<div>{Array( 5 ).fill().map( ( _, i ) => 
			<span role="img" aria-label="star" key={ Math.random() }>
				{rating >= i ? '🌟' : '☆' }
			</span>)}
		</div>}
		{comment( rating, style )}
	</React.Fragment>
);

function Restaurant ( { address, contact, name, rating } ) {
	const [ expanded, setExpanded ] = useState( false );

	const style = useStyle();

	const handleExpandedClick = () => setExpanded( !expanded );
	
	return (
		<Card raised={ true } className={ style.card }>
			<CardHeader
				title={ name }
				subheader={ stars( rating, style ) }
				classes={ {
					subheader: style.cardHeaderSub,
					title: style.cardHeaderTitle
				} }
			/>
			<CardContent className={style.cardContent}>
				
				<Typography variant="body1">
					{ address.street }, { address.city }, { address.state }
				</Typography>

			</CardContent>

			<CardActions disableSpacing>
				<IconButton>
					<FavoriteIcon/>
				</IconButton>
				<IconButton>
					<ShareIcon/>
				</IconButton>
				<IconButton
					className={style.expand}
					onClick={ handleExpandedClick }
					aria-expanded={ expanded }
					aria-label='Show more'
				>
					<ExpandMoreIcon/>
				</IconButton>
			</CardActions>

			<Collapse in={ expanded } timeout='auto' unmountOnExit>
				<CardContent>
				<Typography variant="caption">
					<table>
						<tr>
							<td>
								Phone:
							</td>
							<td>
								{ contact.phone }
							</td>
						</tr>
						<tr>
							<td>
								Email:
							</td>
							<td>
								{ contact.email }
							</td>
						</tr>
						<tr>
							<td>
								Website:
							</td>
							<td>
								{ contact.site } 
							</td>
						</tr>
					</table>
					</Typography>
				</CardContent>
			</Collapse>

		</Card>
	)
};

export default Restaurant;

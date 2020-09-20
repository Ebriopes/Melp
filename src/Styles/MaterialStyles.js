import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
	bkgPage: {
		maskImage:	'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0))',
		objectFit:	'cover',
		position:	'absolute',
		zIndex:		'-1',
		height:		'100vh',
		width:		'100%',
	},
	navBar: {
		position:	'static',
		color:		'coral',
		boxShadow:	'none',
		fontFamily:	'Lobster',
		textShadow:	'0 0 8px #000',
	},
	navTitle: {
		flexGrow:	'1',
		fontFamily:	'inherit',
	},
	navLink: {
		color:			'inherit',
		margin:			'0 10px',
		fontSize:		'larger',
		fontFamily:		'inherit',
		textShadow:		'inherit',
		textTransform:	'capitalize',
		textDecoration: 'none',
	},
	homeText: {
		textShadow:	'0 0 8px #000',
		textAlign:	'center',
		margin:		'10vh auto',
		color:		'floralwhite',
	},
	load: {
		display:	'block',
		color:		'coral',
		margin:		'30px auto',
	},
	filterGroup: {
		display:		'flex',
		width:			'fit-content',
		marginLeft:		'auto',
		marginRight:	'5px',
		backgroundColor:'beige',
	},
	filterBtn:{
		backgroundColor:'inherit',
		color:			'orangered',
	},
	cards:{
		display:	'flex',
		flexWrap:	'wrap',
	},
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
}))

export default useStyle;

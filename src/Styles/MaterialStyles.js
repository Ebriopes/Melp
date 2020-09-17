import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() =>({
	bkgPage: {
		maskImage:	'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0))',
		objectFit:	'cover',
		position:	'absolute',
		zIndex:		'-1',
		height:		'100vh',
		width:		'100vw',
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
		backgroundColor:'coral',
	},
	cards:{
		display:	'flex',
		flexWrap:	'wrap',
	},
	btn:{
		backgroundColor: 'inherit',
	},
	card: {
		margin: '20px auto',
		width: '300px',
		height: '350px',
	},
	cardHeader: {
		paddingBottom: '0',
	},
}))

export default useStyle;
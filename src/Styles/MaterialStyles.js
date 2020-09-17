import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() =>({
	bkgPage: {
		objectFit:	'cover',
		height:		'100vh',
		width:		'100vw',
		zIndex:		'-1',
		position:	'absolute',
		maskImage:	'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0))',
	},

}))

export default useStyle;
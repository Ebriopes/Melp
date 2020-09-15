import React               from 'react';
import { makeStyles }      from '@material-ui/core';
import Home                from './Views/Home';
import Navbar              from './Components/Navbar';
import background          from './assets/background.jpeg';

const useStyle = makeStyles(() =>({
  bg: {
    objectFit: 'cover',
    height: '100vh',
    width: '100%',
    zIndex: '-1',
    position: 'absolute',
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0))',
  },
}))

function App() {
  
  const classes = useStyle();

  return (
    <React.Fragment>
      
      <img  src={background}
            className={classes.bg}
            alt='background'
            />

        <Navbar/>
        <Home/>
    </React.Fragment>
  );
}

export default App;

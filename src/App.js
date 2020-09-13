import React               from 'react';
import { makeStyles }      from '@material-ui/core';
import Navbar              from './Components/Navbar';
import Home                from './Views/Home';
import Presentation        from './Views/Presentation';
import SortContextProvider from './Contexts/SortContext';

const useStyle = makeStyles(() =>({
  App: {
    background: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopenforbusiness.opentable.com%2Fwp-content%2Fuploads%2Fsites%2F100%2F2015%2F07%2F20141027-Wide-Towards-Bar-1.jpg&f=1&nofb=1")',
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "bottom",
    height: "100vh",
  }
}))

function App() {
  const classes = useStyle();
  return (
    <div className={classes.App}>
      <SortContextProvider>
        <Navbar/>
        {/* <Home/> */}
        <Presentation/>
      </SortContextProvider>
    </div>
  );
}

export default App;

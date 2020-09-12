import React from 'react';
import Navbar from './Components/Navbar';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() =>({
  App: {
    background: 'url("https://i.pinimg.com/originals/a9/dc/ae/a9dcae3a2c79d488aa421e435fcb7c73.jpg")',
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
      <Navbar/>
      <header className="App-header">
        <p> Start page </p>
      </header>
    </div>
  );
}

export default App;

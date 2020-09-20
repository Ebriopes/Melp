import RestaurantContextProvider from './Contexts/RestaurantContext';
import React		from 'react';
import Background	from './Components/Background';
import Navbar		from './Components/Navbar';
import Home			from './Views/Home';
import Maps			from './Views/Maps';

import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';


function App () {
	return (
		<Router>
			<Background />
			<Navbar />

			<RestaurantContextProvider>
				<Switch>
					<Route exact path='/'>
						<Redirect to='home'/>
					</Route>
					<Route exact path='/home'>
						<Home />
					</Route>
					<Route exact path='/maps'>
						<Maps/>
					</Route>
					<Route path='*'>
						<h1>404 page not found</h1>
					</Route>
				</Switch>
			</RestaurantContextProvider>

		</Router>
	);
};

export default App;

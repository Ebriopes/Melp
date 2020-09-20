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
	return (<>
		<Navbar />
		<Background />
		<Router>
			<RestaurantContextProvider>
				<Switch>
					<Route exact path='/Melp'>
						<Redirect to='/Melp/home'/>
					</Route>
					<Route exact path='/'>
						<Redirect to='/Melp/home'/>
					</Route>
					<Route exact path='/Melp/home'>
						<Home />
					</Route>
					<Route exact path='/Melp/maps'>
						<Maps/>
					</Route>
					<Route path='*'>
						<h1>404 page not found</h1>
					</Route>
				</Switch>
			</RestaurantContextProvider>
		</Router></>
	);
};

export default App;

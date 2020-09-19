import React		from 'react';
import Home			from './Views/Home';
import Navbar		from './Components/Navbar';
import Background	from './Components/Background';
import RestaurantContextProvider from './Contexts/RestaurantContext';

function App () {
	return (
		<RestaurantContextProvider>
			<Background/>
			<Navbar />
			<Home />
		</RestaurantContextProvider>
	);
};

export default App;

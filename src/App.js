import React		from 'react';
import Home			from './Views/Home';
import Navbar		from './Components/Navbar';
import Background	from './Components/Background';

function App () {
	return (
		<React.Fragment>
			<Background/>
			<Navbar />
			<Home />
		</React.Fragment>
	);
};

export default App;

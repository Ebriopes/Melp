import React, { createContext, useState } from 'react';

export const SizeContext = createContext();

const SizeContextProvider = (props) => {
	const [size, setSize] = useState({navbar: 64,});

	return(
		<SizeContext.Provider value={{size, setSize}}>
			{props.children}
		</SizeContext.Provider>
	)
}

export default SizeContextProvider;
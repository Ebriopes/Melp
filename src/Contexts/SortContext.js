import React, { createContext, useState } from 'react';

export const SortContext = createContext();

const SortContextProvider = (props) => {
	const [sortBase, setSortBase] = useState([]);
	console.info(sortBase)
	
	return(
		<SortContext.Provider value={{sortBase, setSortBase}}>
			{props.children}
		</SortContext.Provider>
	)
}

export default SortContextProvider;
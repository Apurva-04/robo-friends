import React from 'react';
import './SearchBox.css';

const SearchBox=({searchChange})=>{
	return(
		<div id="form">
			<input 
			type="text" 
			name="name" 
			placeholder="Name"
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
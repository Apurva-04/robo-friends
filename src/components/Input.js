import React from 'react';
import './Input.css'

const Input=()=>{
	return(
		<div id="form">
			<form>
				<input type="text" name="name" placeholder='Name' required/>
				<input type="email" name="email" placeholder='Email' required/>
				<button>ADD</button>
			</form>
		</div>
	);
}

export default Input;
//<input type="submit" name='Add' value='ADD'/>
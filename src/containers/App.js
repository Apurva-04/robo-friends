import React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox.js'
import CardGen from '../components/CardGen.js';
//import { robots } from './robots';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends React.Component{
	
	constructor(){
		super();
		this.state={
			robots: [],
			searchfield: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=>{
			return response.json();
		}).then((users)=>{
			this.setState({robots: users});
		});
	}

	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value});
	}
	
	render(){
		const filteredRobots= this.state.robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if(!this.state.robots.length)
			return <h1> Loading </h1>;
		else
			return(
				<div>
					<h1>ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardGen robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default App;
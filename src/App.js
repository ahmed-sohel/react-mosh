import React, { Component } from 'react';
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import './App.css';

class App extends Component {
	state = {
		counters: [
			{id: 1, value: 1},
			{id: 2, value: 1},
			{id: 3, value: 1},
			{id: 4, value: 1}
		]
	}
	constructor(){
		super();
		console.log('App - Constructor');
	}
	componentDidMount(){
		console.log('App - Mounted');
	}

	
	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({counters});
	}
	handleDelete = counter_id => {
		const counters = this.state.counters.filter(c => c.id !== counter_id);
		this.setState({counters})
	}
	handleReset = () => {
		const counters = this.state.counters.map(c => {
					c.value = 0;
					return c;
				});
		this.setState({counters})
	}
	render() {
		console.log('App - rendered');
		return (
		  <React.Fragment>
		     <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
		     <main className="container">
		     	<Counters 
		     		counters={this.state.counters}
		     		onIncrement={this.handleIncrement} 
		     		onDelete={this.handleDelete} 
		     		onReset={this.handleReset} />
		     </main>
		  </React.Fragment>
		);
	}
}

export default App;

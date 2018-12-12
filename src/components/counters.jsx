import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{

	state = {
		counters: [
			{id: 1, value: 1},
			{id: 2, value: 1},
			{id: 3, value: 1},
			{id: 4, value: 1}
		]
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
	render(){
		return (
			<React.Fragment>
				<button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
				{this.state.counters.map(counter => 
					<Counter key={counter.id} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counter={counter} />
				)}
			</React.Fragment>
		)
	}
}
export default Counters;

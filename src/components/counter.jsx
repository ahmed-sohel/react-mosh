import React, { Component } from 'react';

class Counter extends Component{
	state = {
		value: this.props.counter.value
	}

	//for handling events if arrow function not work in future
	// constructor(){
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }
	
	
	handleIncrement = () => {
		this.setState({value: this.state.value+1})
	}
	handleDecrement = () => {
		if(this.state.value === true){
			this.setState({value: this.state.value-1})
		}
	}

	render(){
		return (
			<React.Fragment>
				<h4>Counter #{this.props.counter.id}</h4>
				<span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
				<button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Decrement</button>
			</React.Fragment>
			);
	}
	styles = {
		fontSize: 20,
		fontWeight: 'bold'
	}
	formatCount(){
		const {value} = this.state;
		return value === 0 ? 'zero' : value;
	}
	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += (this.state.value === 0 ? 'warning' : 'primary');
		return classes;
	}
}

export default Counter;
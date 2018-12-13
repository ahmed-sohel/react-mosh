import React, { Component } from 'react';

class Counter extends Component{
	componentDidUpdate(prevProps, prevState){
		console.log('prevprops', prevProps);
		console.log('prevState', prevState);
		if(prevProps.counter.value !== this.props.counter.value){
			//Ajax call and get new data from the server
		}
	}
	componentWillUnmount(){
		console.log('Counter - Unmount');
	}
	render(){
		return (
			<React.Fragment>
				<h4>Counter #{this.props.counter.id}</h4>
				<span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
				<button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Decrement</button>
			</React.Fragment>
			);
	}
	styles = {
		fontSize: 20,
		fontWeight: 'bold'
	}
	formatCount(){
		const {value} = this.props.counter;
		return value === 0 ? 'zero' : value;
	}
	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0 ? 'warning' : 'primary');
		return classes;
	}
}

export default Counter;
import React, { Component } from 'react';

class Counter extends Component{
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3']
	}

	//for handling events if arrow function not work in future
	// constructor(){
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }
	
	
	handleIncrement = val => {
		this.setState({count: this.state.count+val})
	}

	render(){
		return (
			<React.Fragment>
				<span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={() => this.handleIncrement(2)} className="btn btn-secondary btn-sm">Increment</button>
				<ul>
					{this.state.tags.map(tag => <li>{ tag }</li>)}
				</ul>
			</React.Fragment>
			);
	}
	styles = {
		fontSize: 20,
		fontWeight: 'bold'
	}
	formatCount(){
		const {count} = this.state;
		return count === 0 ? 'zero' : count;
	}
	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += (this.state.count === 0 ? 'warning' : 'primary');
		return classes;
	}
}

export default Counter;
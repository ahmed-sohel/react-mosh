import React, { Component } from 'react';

class Counter extends Component{
	state = {
		count: 1,
		tags: ['tag1', 'tag2', 'tag3']
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
	render(){
		return (
			<React.Fragment>
				<span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
				<ul>
					{this.state.tags.map(tag => <li>{ tag }</li>)}
				</ul>
			</React.Fragment>
			);
	}
}

export default Counter;
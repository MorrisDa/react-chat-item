import React, { Component } from "react";
import { render} from 'react-dom';
import Aux from '../../src';

class Example extends Component {
	constructor(props) {
		super(props);
		this.n = new Array(50).fill(undefined);
	}

	addItem() {
		this.n.push(undefined);
		this.forceUpdate();
	}

	removeItem() {
		this.n.pop();
		this.forceUpdate();
	}

	render() {
		return (
	    <div>
	    	<div style={{overflow: 'hidden', padding: 15}}>
		      <h2>Ahoy! Twilio chat item</h2>
		      <p>resize the page to see it in action!</p>
		      <button onClick={this.addItem.bind(this)}>Add one</button>
		      <button onClick={this.removeItem.bind(this)}>Remove one</button>
	      </div>
	        {
	          this.n.map((it, idx) => {
	            return (
	              <div key={idx} style={{width: '20%', float:'left'}}>
	                <Aux
	                	statusColor="#259907"
	                	url='https://www.w3schools.com/howto/img_avatar.png'
	                	title='Arnold Shwarp'
	                	subtitle='Online | 14h'
	                	minWidth={0}
	                	maxWidth={180}
	                />
	              </div>
	            );
	          })
	        }
	    </div>
	  );
	}
}


const App = () => (
	<Example/>
);
render(<Example/>, document.getElementById("root"));

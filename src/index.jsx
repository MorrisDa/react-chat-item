"use strict"

import React, { Component } from "react";
import './style.scss';

const notifier = {
	listeners: [],
	timer: false,
	subscribe: function(cll) {
		this.listeners.push(cll);
		return cll;
	},
	unsubscribe: function(cll) {
		this.listeners.splice(this.listeners.indexOf(cll), 1);
	},
	handle: function() {
		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.timer = setTimeout(() => {
			this.listeners.forEach(cll => {
				window.requestAnimationFrame(cll);
			});
			this.timer = false;
		}, 200);
	}
};

window.addEventListener("resize", notifier.handle.bind(notifier));

class ChatItem extends Component {
	constructor(props) {
		super(props);
		this.container = React.createRef();

		this.state = {
			showAvatar: true
		};
	}

	componentDidMount() {
		this.sizeCheck();
		this.handler = notifier.subscribe(this.sizeCheck.bind(this));
	}

	componentWillUnmount() {
		notifier.unsubscribe(this.handler);
	}

	sizeCheck() {
		const condition = this.container.current.offsetWidth >= 160;

		if (this.state.showAvatar !== condition) {
			this.setState({
				showAvatar: condition
			});
		}
	}

	render() {
		const { title, subtitle, url, minWidth, maxWidth } = this.props;

		return (
			<div className='tw-wrapper' ref={this.container} style={{maxWidth: this.props.maxWidth, minWidth: this.props.minWidth}}>
				{
					this.state.showAvatar ?
					<div className='tw-avatar' style={{backgroundImage: `url("${url}")`}}>
						<div className='tw-status tw-status-avatar' style={{background: this.props.statusColor}}></div>
					</div>
					:
					<div className='tw-status' style={{background: this.props.statusColor}}></div>
				}
				<div className='tw-text-wrapper'>
					<div className='tw-text tw-title'>{title}</div>
					<div className='tw-text'>{subtitle}</div>
				</div>
			</div>
		);
	}
}

ChatItem.defaultProps = {
	url: 'https://via.placeholder.com/150x150',
	statusColor: 'green',
	title: 'Harry Robinson',
	subtitle: 'Online | 14h',
	minWidth: 'auto',
	maxWidth: 'auto',
};

export default ChatItem;

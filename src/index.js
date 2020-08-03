import React from 'react';
import ReactDOM from 'react-dom';
import './intro.css';
import './sidebar.css';
import './landing_page.css';


class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<div className="avatar">
					<img src={this.props.avatar} alt="It's a me, Theo"/>
				</div>
				<Menu />
			</div>
		)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<MenuItem 
					name="Intro"
				/>
				<MenuItem 
					name="Projects"
				/>
				<MenuItem 
					name="Resume"
				/>
			</div>
		)
	}
}

class MenuItem extends React.Component {
	render() {
		return (
			<div className="menuItem">
				{this.props.name}
			</div>
		)
	}
}

class Intro extends React.Component {
	render() {
		return (
			<div className="intro">
				<p>
					Hello! My name is Theo. I am a software engineer.
				</p>
			</div>
		)
	}
}

class LandingPage extends React.Component {
	render() {
		return (
			<div className="container">
				<Sidebar 
					avatar={require("./images/me.jpg")}
				/>
				<Intro />
			</div>
		);
	}
}


ReactDOM.render(
	<LandingPage />,
	document.getElementById('root')
);

import React from "react";
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";

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
				<Link to="/">
					<MenuItem 
						name="Intro"
					/>
				</Link>
				<Link to="/projects">
					<MenuItem 
						name="Projects"
					/>
				</Link>
				<Link to="/resume">
					<MenuItem 
						name="Resume"
					/>
				</Link>
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


export {
	Sidebar,
	Menu
}

import React from "react";
import {
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
				<div className="linkIconContainer">
					<LinkIcon link="https://github.com/theovasi" icon={require("./images/github.svg")} alt="Github icon"/>
					<LinkIcon link="https://www.linkedin.com/in/theodorosvasileiadis/" icon={require("./images/linkedin.svg")} alt="Linkedin icon"/>
					<LinkIcon link="https://stackoverflow.com/users/7268442/theo-vasileiadis" icon={require("./images/stackoverflow.svg")} alt="Stack Overflow icon"/>
				</div>
			</div>
		)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<Link to="/" className="menuItem">
					<MenuItem
						name="Intro"
					/>
				</Link>
				<Link to="/projects" className="menuItem">
					<MenuItem
						name="Projects"
					/>
				</Link>
				<Link to="/resume" className="menuItem">
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
			<div>
				{this.props.name}
			</div>
		)
	}
}

class LinkIcon extends React.Component {
	render() {
		return (
			<div className="linkIcon">
				<a href={this.props.link}><img src={this.props.icon} alt={this.props.alt}></img></a>
			</div>
		)
	}
}

export {
	Sidebar,
	Menu
}

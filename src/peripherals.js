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
	constructor(props) {
		super(props);
		this.state = {activeItem: ""};
	}
	setActive(itemName) {
		this.setState({activeItem: itemName});
	}

	render() {
		return (
			<div className="menu">
				<Link to="/">
					<MenuItem
						name="Intro" activeItem={this.state.activeItem}
						onClick={this.setActive.bind(this)}
					/>
				</Link>
				<Link to="/resume">
					<MenuItem
						name="Resume" activeItem={this.state.activeItem}
						onClick={this.setActive.bind(this)}
					/>
				</Link>
				<Link to="/projects">
					<MenuItem
						name="Projects" activeItem={this.state.activeItem}
						onClick={this.setActive.bind(this)}
					/>
				</Link>
			</div>
		)
	}
}

class MenuItem extends React.Component {
	getClassName(itemName) {
		const urlItemArray = window.location.href.split("/");
		const urlActiveItem = urlItemArray[urlItemArray.length-1];
		console.log(urlActiveItem);
		if (urlActiveItem === itemName.toLowerCase() && this.props.activeItem === "") {
			return "menuItem active"
		}
		else if (itemName === "Intro" && this.props.activeItem === "" && urlActiveItem === "") {
			return "menuItem active"
		} else {
			return "menuItem "+((this.props.activeItem === itemName) ? "active" : "");
		}
	}
	render() {
		return (
			<div className={this.getClassName(this.props.name)} onClick={() => {this.props.onClick(this.props.name)}}>
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

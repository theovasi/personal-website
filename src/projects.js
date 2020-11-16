import React from 'react';

import './projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="mainContent">
				<p>Here are some demos of my projects</p>
				<div className="projects">
					<Project title="BrowseWiki" projectDemo={require("./images/placeholder.gif")} alt="Project demo"
						description="An example of browsing the english version of wikipedia using browseWiki"
					/>
					<div className="divider"/>
					<Project title="Go" projectDemo={require("./images/placeholder.gif")} alt="Project demo"
						description="A game of go versus a Monte Carlo search based opponent"
					/>
					<div className="divider"/>
					<Project title="cryptoMsg" projectDemo={require("./images/placeholder.gif")} alt="Project demo"
						description="Example of an encrypted conversation"
					/>
				</div>
			</div>
		)
	}
}

class Project extends React.Component {
	render() {
		return (
			<div className="project">
				<h4>{this.props.title}</h4>
				<div className="project-gif">
					<img src={this.props.projectDemo} alt={this.props.alt}/>
				</div>
				<div className="project-description">
					{this.props.description}
				</div>
			</div>
		)
	}
}

export default Projects;

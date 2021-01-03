import React from 'react';

import './main.css';
import './projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="mainContent">
				<div className="projects">
					<Project title="BrowseWiki" projectDemo={require("./images/placeholder.gif")} alt="Project demo"
						description="An example of browsing the english version of wikipedia using browseWiki"
					/>
					<div className="divider"/>
					<Project title="Go" projectDemo={require("./images/go.gif")} alt="Project demo"
						description="A game of go versus a Monte Carlo search based opponent"
					/>
					<div className="divider"/>
					<Project title="cryptoMsg" projectDemo={require("./images/cryptoMsg.gif")} alt="Project demo"
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
				<div className="project-demo-title">{this.props.title}</div>
				<div className="project-demo-gif">
					<img src={this.props.projectDemo} alt={this.props.alt}/>
				</div>
				<div className="project-demo-description">
					<p>
						{this.props.description}
					</p>
				</div>
			</div>
		)
	}
}

export default Projects;

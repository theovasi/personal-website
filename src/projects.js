import React from 'react';

import './main.css';
import './projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="mainContent">
				<div className="projects">
					<Project title="BrowseWiki" projectDemo={require("./images/placeholder.gif")} alt="Project demo"
						description="An example of browsing the english version of wikipedia. Initially the user is presented with a set of article categories which can be examined on the right. Then by selecting a number of categories and clicking browse the user can pick the topic or topics that are of interest and explore those further."
					/>
					<div className="divider"/>
					<Project title="Go" projectDemo={require("./images/go.gif")} alt="Project demo"
						description="A game of go versus a Monte Carlo search based opponent. The opponent is able to look a number of moves ahead and make smart decisions to maximise the territory it occupies on the board."
					/>
					<div className="divider"/>
					<Project title="cryptoMsg" projectDemo={require("./images/cryptoMsg.gif")} alt="Project demo"
						description="Example of an encrypted conversation. Based on the RSA cryptosystem the users first exchange security keys and then encrypted messages can be sent."
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

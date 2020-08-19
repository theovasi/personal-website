import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";

import {Sidebar} from "./peripherals.js"
import Intro from "./intro.js"
import Resume from "./resume.js"
import Projects from "./projects.js"

import './intro.css';
import './sidebar.css';
import './landing_page.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Sidebar
						avatar={require("./images/me.jpg")}
					/>
					<Route exact path="/">
						<Intro />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/resume">
						<Resume />
					</Route>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

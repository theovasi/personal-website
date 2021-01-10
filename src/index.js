import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";
import {CookiesProvider} from 'react-cookie';

import {Sidebar, ResumeDownload} from "./peripherals.js"
import Intro from "./intro.js"
import Resume from "./resume.js"
import Projects from "./projects.js"

import './main.css';
import './peripherals.css';

class App extends React.Component {
	render() {
		return (
			<CookiesProvider>
				<Router>
					<div className="container">
						<Route exact path="/">
							<Sidebar
								key={window.location.href}
								avatar={require("./images/me.jpg")} url={window.location.href}
							/>
							<Intro />
						</Route>
						<Route path="/resume">
							<Sidebar
								key={window.location.href}
								avatar={require("./images/me.jpg")} url={window.location.href}
							/>
							<ResumeDownload />
							<Resume />
						</Route>
						<Route path="/projects">
							<Sidebar
								key={window.location.href}
								avatar={require("./images/me.jpg")} url={window.location.href}
							/>
							<Projects />
						</Route>
					</div>
				</Router>
			</CookiesProvider>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

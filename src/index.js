import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";
import {CookiesProvider} from 'react-cookie';

import {Sidebar} from "./peripherals.js"
import Intro from "./intro.js"
import Resume from "./resume.js"
import Projects from "./projects.js"

import './main.css';
import './intro.css';
import './sidebar.css';
import './landing_page.css';

class App extends React.Component {
	render() {
		return (
			<CookiesProvider>
				<Router>
					<div className="container">
						<Sidebar
							avatar={require("./images/me.jpg")}
						/>
						<Route exact path="/">
							<Intro />
						</Route>
						<Route path="/resume">
							<Resume />
						</Route>
						<Route path="/projects">
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

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
					<img src={require("./images/me.jpg")} alt="It's a me, Theo"/>
				</div>
			</div>
		)
	}
}

class Intro extends React.Component {
	render() {
		return (
			<p>
				Hello! My name is Theo. I am a software engineer.
			</p>
		)
	}
}

class LandingPage extends React.Component {
	render() {
		return (
			<div className="container">
				<Sidebar />
				<Intro />
			</div>
		);
	}
}


ReactDOM.render(
	<LandingPage />,
	document.getElementById('root')
);

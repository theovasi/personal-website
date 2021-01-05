import React from 'react';

import './main.css';
import './intro.css';

class Intro extends React.Component {
	render() {
		return (
			<div className="mainContent">
				<div className="intro">
					<div className="header">
						<div className="section-name">
							Hello! <span role="img" aria-label="Waving hand emoji">👋</span> My name is Theo.
						</div>
					</div>
					<p>
						Passionate software engineer motivated by the way software can improve people's lives. I have great attention to detail and value clean, readable and maintainable code. I like to take pride in what I create and strive to continuously improve. 
					</p>
					<p>
						I am a software engineer currently working for a travel software company called Amadeus. There I contribute
						to the industry-leading check-in and passenger management system, a mission critical application that handles
						more than a billion passengers a year at 99.99% SLA. Mainly I code in C++ and Python but one might also catch me doing some front-end work primarily using Angular.
					</p>
					<p>
						I am always eager to learn new things around software and I like to work on personal projects to experiment
						with new tools and technologies that interest me and improve. Lately I've been very interested in
						Machine Learning and React.
					</p>
				</div>
			</div>
		)
	}
}

export default Intro;

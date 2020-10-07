import React from 'react';

import './intro.css';

class Intro extends React.Component {
	render() {
		return (
			<div className="mainContent">
				<div className="intro">
					<h3>
						Hello! &#128075;
					</h3>
					<h4>
						My name is Theo
					</h4>
					<p>
						I am a software engineer currently working for a travel software company called Amadeus. There I write
						mainly backend code (C++ and Python) for high-availability mission critical applications that handle
						millions of passengers daily to make air travel possible. One might also catch me doing some frontend
						work primarily using Angular.
					</p>
					<p>
						I am always eager to learn new things around software and I like to work on personal projects to experiment
						with new tools and technologies that interest me and improve. Lately I've been very interested in
						Machine Learning and React.
					</p>

					<p className="contact">
						Feel free to get in touch at: theo.vasileiadis.work@gmail.com
					</p>
				</div>
			</div>
		)
	}
}

export default Intro;

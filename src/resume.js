import React from 'react';

import './resume.css';

class Resume extends React.Component {
	render() {
		return (
			<div className="mainContent">
				<div className="resume">
					<div className="info">
						<div className="name"><p>Theodoros Vasileiadis</p></div>
						<div className="contact_details">
							<p>London, UK</p>
							<p>theo.vasileiadis.work@gmail.com</p>
						</div>
					</div>
					<div className="divider"/>
					<div className="section_name">Experience</div>
					<div className="divider"/>
					<div className="section_name">Skills</div>
					<div className="divider"/>
					<div className="section_name">Projects</div>
				</div>
			</div>
		);
	}
}

export default Resume;

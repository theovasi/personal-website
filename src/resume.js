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
					<Experience company="Amadeus" role="Software Development Engineer - Graduate"
								startDate="May 2019" endDate="Present"
								description="Focused on the back-end of the company's customer management solution that orchestrates the world's air travel. Contributed effectively following a service based architecture to deliver an industry leading product that offers a wide feature set while maintaining high availability"
								technologies="C++ / Python"
					/>
					<Experience company="Hellenic Army General Staff" role="Software Engineer"
								startDate="May 2018" endDate="December 2018"
								description="Contributed to a system that allows mobilisation authorities to manage Hellenic Army reserves and resources, schedule training exercises and mobilise reserves in case of emergency. The rest is classified."
								technologies="Java / JavaScript"
					/>
					<div className="divider"/>
					<div className="section_name">Skills</div>
					<div className="divider"/>
					<div className="section_name">Projects</div>
				</div>
			</div>
		);
	}
}

class Experience extends React.Component {
	render() {
		return (
			<div className="resumeSection experience">
				<div className="wrapper-top"/>
				<p className="role">{this.props.company}: {this.props.role}</p>
				<p className="duration">{this.props.startDate} - {this.props.endDate}</p>
				<p className="description">{this.props.description}</p>
				<p className="technologies">{this.props.technologies}</p>
				<div className="wrapper-bottom"/>
			</div>
		)
	}
}

export default Resume;

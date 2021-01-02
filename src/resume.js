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
								technologies={["C++", "Python"]}
					/>
					<Experience company="Hellenic Army General Staff" role="Software Engineer"
								startDate="May 2018" endDate="December 2018"
								description="Contributed to a system that allows mobilisation authorities to manage Hellenic Army reserves and resources, schedule training exercises and mobilise reserves in case of emergency. The rest is classified."
								technologies={["Java", "JavaScript"]}
					/>
					<div className="divider"/>
					<div className="section_name">Skills</div>
					<Skills skills={["Python", "C++", "Java", "JavaScript", "React", "HTML/CSS", "pytest", "git", "SciPy",
									 "Machine Learning", "Natural Language Processing", "Test Driven Development",
									 "Agile Software Development"]}/>
					<div className="divider"/>
					<div className="section_name">Projects</div>
					<Project name="browseWiki" description="Developed performant NLP pipeline to represent text documents in a topic based vector space. Developed web application for browsing Wikipedia using the Scatter/Gather search engine approach."
							 technologies={["Python", "Flask", "Scikit-learn"]}/>
					<Project name="go" description="An implementation of the Chinese board game Go that implements game decision making algorithms to let users play against an intelligent computer opponent."
							 technologies={["Java"]}/>
					<Project name="cryptoMsg" description="Text chat application that uses the RSA cryptosystem to enable encrypted
communication between two users."
							 technologies={["Java"]}/>
					<Project name="crush" description="A clone of the candy crush game that runs on FPGA boards."
							 technologies={["VHDL"]}/>
					<Project name="cryptoMsg" description="A clone of the candy crush game that runs on FPGA boards."
							 technologies={["Java"]}/>
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
				<p className="technologies">{this.props.technologies.join(" / ")}</p>
				<div className="wrapper-bottom"/>
			</div>
		)
	}
}

class Skills extends React.Component {
	render() {
		const skills_bullet_list = [];
		for (let i=0; i<this.props.skills.length; i++) {
			skills_bullet_list.push(<span>{this.props.skills[i]}</span>);
			if (i !== this.props.skills.length-1) {
				skills_bullet_list.push(<span role="img" aria-label="Bullet point"> • </span>);
			}
		}

		return (
			<div className="skills">
				{skills_bullet_list}
			</div>
		)
	}
}

class Project extends React.Component {
	render() {
		return (
			<div className="resume-project">
				<div className="wrapper-top"/>
				<p className="project-name">{this.props.name}</p>
				<p className="project-description">{this.props.description}</p>
				<p className="project-technologies">{this.props.technologies.join(" / ")}</p>
				<div className="wrapper-bottom"/>
			</div>
		)
	}
}

export default Resume;

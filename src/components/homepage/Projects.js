import React, { Fragment } from 'react';
import ProjectItem from './ProjectItem';
import Divider from '../layout/Divider';

const Projects = (props) => {
	const projects = props.projects;

	return (
		<div className='row experience'>
			<div className='col-12 title' style={{ margin: '0px' }}>
				Projects
			</div>
			<Divider size='medium'></Divider>
			{projects.map((projects) => (
				<Fragment>
					<ProjectItem projects={projects}></ProjectItem>
					<Divider size='medium'></Divider>
				</Fragment>
			))}
		</div>
	);
};

export default Projects;

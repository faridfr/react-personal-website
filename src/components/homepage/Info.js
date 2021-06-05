import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import Divider from '../layout/Divider';
import About from './About';
import Intro from './Intro';
import Experiences from './Experiences';
import Projects from './Projects';
import Educations from './Educations';
import Memories from './Memories';

const Info = (props) => {
	const {
		info,
		skills,
		educations,
		experiences,
		projects,
		contact,
		settings,
		memories,
	} = props.data;

	const Container = styled.div`
		height: 100vh;
		overflow-y: scroll;
		background-color: ${settings.backgroundColor};
		position: relative;
		color: ${settings.textColor};
		padding: ${settings.padding}px;
	`;

	return (
		<Container className='col-lg-12 col-sm-12 info-div'>
			<div className='row'>
				<div className='col-lg-6'>
					<div id="leftDiv">
						<Intro info={info} contact={contact} />
						<Divider size='large' />
						<About about={info.about} />
					</div>
				</div>
				<div className='col-lg-6'>
					<Experiences experiences={experiences} />
					<Divider size='large' />
					<Projects projects={projects} />
					<Divider size='large' />
					<Memories memories={memories} />
					<Divider size='large' />
					<Skills skills={skills} />
					<Divider size='large' />
					<Educations educations={educations} />
				</div>
			</div>
		</Container>
	);
};

export default Info;

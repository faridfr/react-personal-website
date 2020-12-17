import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import Divider from '../layout/Divider';
import Contact from './Contact';
import About from './About';
import Intro from './Intro';
import Experiences from './Experiences';
import Educations from './Educations';
import Memories from './Memories';

const Info = (props) => {
	const {
		info,
		skills,
		educations,
		experiences,
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
		<Container className='col-lg-6 col-sm-12 info-div'>
			<Intro info={info} />
			<Divider size='large' />
			<About about={info.about} />
			<Divider size='large' />
			<Skills skills={skills} />
			<Divider size='large' />
			<Experiences experiences={experiences} />
			<Divider size='large' />
			<Memories memories={memories} />
			<Divider size='large' />
			<Educations educations={educations} />
			<Divider size='large' />
			<Contact contact={contact} />
		</Container>
	);
};

export default Info;

import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import Divider from './Divider';
import Contact from './Contact';
import About from './About';
import Intro from './Intro';
import Experiences from './Experiences';
import Educations from './Educations';

const Info = (props) => {
	const {
		info,
		skills,
		educations,
		experiences,
		contact,
		settings,
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
		<Container className='col-lg-6 col-sm-12'>
			<Intro info={info}></Intro>
			<Divider size='large'></Divider>
			<About about={info.about}></About>
			<Divider size='large'></Divider>
			<Skills skills={skills}></Skills>
			<Divider size='large'></Divider>
			<Experiences experiences={experiences}></Experiences>
			<Divider size='large'></Divider>
			<Educations educations={educations}></Educations>
			<Divider size='large'></Divider>
			<Contact contact={contact}></Contact>
		</Container>
	);
};

export default Info;

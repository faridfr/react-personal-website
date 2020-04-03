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

const Info = props => {
	const { info, skills, experiences, contact, settings } = props.data;

	const InfoContainer = styled.div`
		height: 100vh;
		overflow-y: scroll;
		background-color: ${settings.backgroundColor};
		position: relative;
		color: ${settings.textColor};
		padding: ${settings.padding}px;
	`;

	return (
		<InfoContainer className='col-6'>
			<Intro info={info}></Intro>
			<Divider size='large'></Divider>
			<About about={info.about}></About>
			<Divider size='large'></Divider>
			<Skills skills={skills}></Skills>
			<Divider size='large'></Divider>
			<Experiences experiences={experiences}></Experiences>
			<Divider size='large'></Divider>
			<Contact contact={contact}></Contact>
		</InfoContainer>
	);
};

export default Info;

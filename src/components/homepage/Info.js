import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import Divider from './Divider';
import Contact from './Contact';
import About from './About';
import Intro from './Intro';
import Experience from './ExperienceItem';

const InfoContainer = styled.div`
	height: 100vh;
	overflow-y: scroll;
	background-color: #1d1d1d;
	position: relative;
	color: white;
	padding: 50px 50px;
`;

const Info = props => {
	const { info, skills, experience, contact } = props.data;

	return (
		<InfoContainer className='col-6'>
			<Intro info={info}></Intro>
			<Divider size='large'></Divider>
			<About about={info.about}></About>
			<Divider size='large'></Divider>
			<Skills skills={skills}></Skills>
			<Divider size='large'></Divider>
			<Experience experience={experience}></Experience>
			<Divider size='large'></Divider>
			<Contact contact={contact}></Contact>
		</InfoContainer>
	);
};

export default Info;

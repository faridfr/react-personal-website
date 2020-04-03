import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import Divider from './Divider';
import Contact from './Contact';
import About from './About';

const InfoContainer = styled.div`
	height: 100vh;
	overflow-y: scroll;
	background-color: #1d1d1d;
	position: relative;
	color: white;
	padding: 50px 50px;
`;

const Info = props => {
	const { info } = props.data;

	return (
		<InfoContainer className='col-6'>
			<div className='intro'>
				<h1>Hi,</h1>
				<h1>
					I'm{' '}
					<span style={{ color: '#FD1056' }}>
						{info.name.split(' ')[0]} {info.name.split(' ')[1].substring(0, 2)}
					</span>
					{info.name.substring(
						info.name.split(' ')[0].length + 3,
						info.name.length
					)}
					,
				</h1>
				<h1>{info.jobTitle}</h1>
			</div>

			<Divider size='large'></Divider>
			<About></About>
			<Divider size='large'></Divider>
			<Skills></Skills>
			<Divider size='large'></Divider>
			<Contact></Contact>
		</InfoContainer>
	);
};

export default Info;

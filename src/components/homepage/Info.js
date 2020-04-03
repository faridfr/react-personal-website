import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import Divider from './Divider';
import Contact from './Contact';
import About from './About';

const Info = styled.div`
	height: 100vh;
	overflow-y: scroll;
	background-color: #1d1d1d;
	position: relative;
	color: white;
	padding: 50px 50px;
`;

function App() {
	return (
		<Info className='col-6'>
			<div className='intro'>
				<h1>Hi,</h1>
				<h1>
					I'm <span style={{ color: '#FD1056' }}>Farid Fr</span>oozan,
				</h1>
				<h1>Full Stack Developer.</h1>
			</div>

			<Divider size='large'></Divider>
			<About></About>
			<Divider size='large'></Divider>
			<Skills></Skills>
			<Divider size='large'></Divider>
			<Contact></Contact>
		</Info>
	);
}

export default App;

import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Skills from './Skills';
import ExperienceItem from './Experience';

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

			<div className='clear-large'></div>

			<div className='about'>
				<div className='title'>About Me</div>
				<div className='description'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, autem!
					Temporibus perspiciatis soluta possimus incidunt, necessitatibus
					tempore accusantium ab pariatur praesentium ea quo tenetur doloribus
					nulla, sunt, minus mollitia libero!
				</div>
			</div>

			<div className='clear-large'></div>

			<div className='skills'>
				<div className='title'>
					Skills & <br></br>Exprerience
				</div>

				<div className='description'>
					<div className='row skills'>
						<Skills></Skills>
					</div>

					<div className='row experience' style={{ marginTop: '60px' }}>
						<ExperienceItem></ExperienceItem>
					</div>
				</div>

				{/* <div className='clear-medium'></div> */}
			</div>
		</Info>

		// <div className='clear-large'></div>

		// 	<div className='educations'>
		// 		<div className='title'>Educations</div>
		// 		<div className='description' style='padding-top:30px;'>
		// 			<div className='row' id='master' style='padding:0x; margin:0px;'>
		// 				<div className='col-1'>
		// 					<img
		// 						src='img/logos/master.png'
		// 						className='img-fluid company-logo'
		// 					></img>
		// 				</div>
		// 				<div className='col-8'>
		// 					<h4 style="font-family:'farid';">Islamic Azad University</h4>
		// 				</div>
		// 				<div className='col-3'>
		// 					<h6 style="font-family:'farid'; float:right;">2019 - 2022</h6>
		// 				</div>
		// 				<div
		// 					className='col-11 offset-1'
		// 					style='text-align:justify; font-size:0.8rem;'
		// 				>
		// 					<h6>
		// 						Master's degree Field Of StudyComputer Software Engineering
		// 					</h6>
		// 				</div>
		// 			</div>

		// 	</div>

		// 	<div className='clear-large'></div>

		// 	<div className='contact'>
		// 		<div className='title'>Contact Me</div>

		// 		<div className='description' style="font-family: 'farid'">
		// 			+98 936-496-1262<br></br>
		// 			froozan [at] yahoo.com
		// 		</div>
		// 	</div>
	);
}

export default App;

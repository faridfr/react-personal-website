import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const About = props => {
	const about = props.about;
	return (
		<div className='about'>
			<div className='title'>About Me</div>
			<div className='description'>{about}</div>
		</div>
	);
};

export default About;

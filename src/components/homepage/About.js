import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const About = (props) => {
	const about = props.about;
	return (
		<Fragment>
			{about.length > 0 && (
				<div className='about'>
					<div className='title'>About Me</div>
					<div className='description'>{about}</div>
				</div>
			)}
		</Fragment>
	);
};

export default About;

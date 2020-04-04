import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
	const contact = props.contact;
	return (
		<div className='contact'>
			<div className='title'>Contact Me</div>
			<div className='description' style={{ fontFamily: 'farid' }}>
				{contact.mobile}
				<br></br>
				{contact.email}
				<br></br>
				<a
					className='link'
					href={'http://github.com/' + contact.github}
					style={{ marginRight: '8px' }}
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a className='link' href={'http://linkedin.com/' + contact.linkedin}>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
		</div>
	);
};

export default Contact;

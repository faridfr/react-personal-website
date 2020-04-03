import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Contact = props => {
	const contact = props.contact;
	return (
		<div className='contact'>
			<div className='title'>Contact Me</div>
			<div className='description' style={{ fontFamily: 'farid' }}>
				{contact.mobile}
				<br></br>
				{contact.email}
			</div>
		</div>
	);
};

export default Contact;

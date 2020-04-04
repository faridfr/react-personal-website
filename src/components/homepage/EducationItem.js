import React, { Fragment } from 'react';
import Divider from './Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const EducationItem = (props) => {
	const education = props.education;
	return (
		<div className='row' style={{ padding: '0px', margin: '0px' }}>
			<div className='col-1'>
				<img
					src={`${process.env.PUBLIC_URL}/${education.logo}`}
					className='img-fluid company-logo'
					alt='University'
				></img>
			</div>
			<div className='col-8'>
				<h4 style={{ fontFamily: 'farid' }}>{education.title}</h4>
			</div>
			<div className='col-3'>
				<h6 style={{ fontFamily: 'farid', float: 'right' }}>
					{education.time}
				</h6>
			</div>
			<div
				className='col-11 offset-1'
				style={{ textAlign: 'justify', fontSize: '0.8rem' }}
			>
				<h6>{education.description}</h6>
			</div>
		</div>
	);
};

export default EducationItem;

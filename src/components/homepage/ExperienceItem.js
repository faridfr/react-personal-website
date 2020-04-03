import React from 'react';

const ExperienceItem = props => {
	const experience = props.experience;

	return (
		<div className='row' id='farazin'>
			<div className='col-1'>
				<img
					src={`${process.env.PUBLIC_URL}/${experience.logo}`}
					className='img-fluid company-logo'
					alt='Farazin'
				></img>
			</div>
			<div className='col-6'>
				<h4 style={{ fontFamily: 'farid' }}>{experience.title}</h4>
			</div>
			<div className='col-5'>
				<h6 style={{ fontFamily: 'farid', float: 'right' }}>
					{experience.time}
				</h6>
			</div>
			<div
				className='col-11 offset-1'
				style={{ textAlign: 'justify', fontSize: '0.8rem' }}
			>
				<h6>{experience.description}</h6>
			</div>
		</div>
	);
};

export default ExperienceItem;

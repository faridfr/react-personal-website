import React from 'react';

const ExperienceItem = props => {
	const experience = props.experience;

	return (
		<div
			className='row'
			id={experience.title}
			style={{ margin: '0px', padding: '0px' }}
		>
			<div className='col-lg-1 d-none d-lg-block'>
				<img
					src={`${process.env.PUBLIC_URL}/${experience.logo}`}
					className='img-fluid company-logo'
					alt={experience.title}
				></img>
			</div>
			<div className='col-lg-6 col-sm-10'>
				<h4 style={{ fontFamily: 'farid' }}>{experience.title}</h4>
			</div>
			<div className='col-lg-5 col-sm-12'>
				<h6 style={{ fontFamily: 'farid', float: 'right' }}>
					{experience.time}
				</h6>
			</div>
			<div
				className='col-lg-11 offset-lg-1'
				style={{ textAlign: 'justify', fontSize: '0.8rem' }}
			>
				<h6>{experience.description}</h6>
			</div>
		</div>
	);
};

export default ExperienceItem;

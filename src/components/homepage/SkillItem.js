import React from 'react';

const SkillItem = (props) => {
	let badgeClass = 'light';
	const skill = props.skill;
	switch (skill.degree) {
		case 'senior':
			badgeClass = 'warning';
			break;
		case 'intermediate':
			badgeClass = 'light';
			break;
		case 'junior':
			badgeClass = 'dark';
			break;
		default:
			badgeClass = 'light';
	}
	return (
		<div className='col-lg-6 col-sm-12' style={{ marginBottom: '7px' }}>
			<div className='skillName'>{skill.name}</div>
			<span
				className={`badge badge-${badgeClass}`}
				style={{ float: 'right', fontFamily: 'farid' }}
			>
				{skill.degree.toUpperCase()}
			</span>
		</div>
	);
};

export default SkillItem;

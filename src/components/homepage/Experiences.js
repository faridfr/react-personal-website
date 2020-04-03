import React, { Fragment } from 'react';
import ExperienceItem from './ExperienceItem';
import Divider from './Divider';

const Experience = props => {
	const experiences = props.experiences;

	return (
		<div className='row experience' style={{ marginTop: '60px' }}>
			{experiences.map(experience => (
				<Fragment>
					<ExperienceItem experience={experience}></ExperienceItem>
					<Divider size='medium'></Divider>
				</Fragment>
			))}
		</div>
	);
};

export default Experience;

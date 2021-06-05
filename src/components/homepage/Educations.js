import React, { Fragment } from 'react';
import EducationItem from './EducationItem';
import Divider from '../layout/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Education = (props) => {
	const educations = props.educations;
	return (
		<div className='educations'>
			<div className='title'>Educations</div>
			<div className='description' style={{ paddingTop: '30px' }}>
				{educations.map((education) => (
					<Fragment>
						<Divider size='large' />
						<EducationItem education={education} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Education;

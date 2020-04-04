import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircle,
	faDotCircle,
	faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function renderSwitch(status) {
	switch (status) {
		case 'online':
			return (
				<Fragment>
					<FontAwesomeIcon icon={faCircle} /> Online
				</Fragment>
			);

		case 'away':
			return (
				<Fragment>
					<FontAwesomeIcon icon={faDotCircle} /> Code + Memories
				</Fragment>
			);

		case 'offline':
			return (
				<Fragment>
					<FontAwesomeIcon icon={faCircleNotch} /> Just Memories
				</Fragment>
			);

		case 'hidden':
		default:
			return '';
	}
}

const ExperienceItem = (props) => {
	const experience = props.experience;

	return (
		<Link
			to={process.env.PUBLIC_URL + '/experience/' + experience.title}
			className='link'
		>
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
					<h5 style={{ fontFamily: 'farid' }}>{experience.title}</h5>
				</div>
				<div className='col-lg-5 col-sm-12'>
					<h6 style={{ fontFamily: 'farid' }} className='showTime'>
						{experience.time}
					</h6>
				</div>
				<div
					className='col-lg-11 offset-lg-1'
					style={{
						textAlign: 'justify',
						fontSize: '0.8rem',
						fontWeight: 'light',
						fontFamily: 'Open Sans, sans-serif',
					}}
				>
					{experience.description}
				</div>
				<div
					className='col-lg-11 offset-lg-1'
					style={{
						marginTop: '10px',
						fontSize: '0.7rem',
						opacity: 0.4,
					}}
				>
					{renderSwitch(experience.status)}
				</div>
			</div>
		</Link>
	);
};

export default ExperienceItem;

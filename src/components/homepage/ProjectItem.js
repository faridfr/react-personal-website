import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircle,
	faDotCircle,
	faCircleNotch,
	faImages,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function renderSwitch(status) {
	switch (status) {
		case 'online':
			return (
				<div style={{ marginRight: '15px', display: 'inline' }}>
					<FontAwesomeIcon icon={faCircle} /> Online
				</div>
			);

		case 'away':
			return (
				<div style={{ marginRight: '15px', display: 'inline' }}>
					<FontAwesomeIcon icon={faDotCircle} /> Code + Memories
				</div>
			);

		case 'offline':
			return (
				<div style={{ marginRight: '15px', display: 'inline' }}>
					<FontAwesomeIcon icon={faCircleNotch} /> Just Memories
				</div>
			);

		case 'hidden':
		default:
			return '';
	}
}

const ProjectItem = (props) => {
	const projects = props.projects;

	return (
		<Link
			to={process.env.PUBLIC_URL + '/projects/' + projects.title}
			className='link'
		>
			<div
				className='row'
				id={projects.title}
				style={{ margin: '0px', padding: '0px' }}
			>
				<div className='col-lg-1 d-none d-lg-block'>
					<img
						src={`${process.env.PUBLIC_URL}/${projects.logo}`}
						className='img-fluid company-logo'
						alt={projects.title}
						style={{ borderRadius: '5px', width: '100%' }}
					></img>
				</div>
				<div className='col-lg-11 col-sm-12' style={{ width: '100%' }}>
					<h5 style={{ fontFamily: 'farid' }}>{projects.title}</h5>
				</div>
				<div className='col-sm-11 offset-sm-1'>
					<h6 style={{ fontFamily: 'farid' }} className='showTime'>
						<span className='d-none d-lg-inline'>{projects.location} / </span>
						{projects.time}{' '}
						<span className='d-none d-lg-inline'>
							, {projects.details.type}
						</span>
					</h6>
				</div>
				<div
					className='col-lg-11 offset-lg-1'
					style={{
						marginTop: '5px',
						fontSize: '0.7rem',
						opacity: 0.4,
					}}
				>
					{renderSwitch(projects.status)}{' '}
					{projects.images !== undefined ? (
						<Fragment>
							<FontAwesomeIcon icon={faImages} /> {projects.images.length}{' '}
						</Fragment>
					) : null}
				</div>
			</div>
		</Link>
	);
};

export default ProjectItem;

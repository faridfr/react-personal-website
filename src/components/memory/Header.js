import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircle,
	faDotCircle,
	faCircleNotch,
	faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
const Navigation = (props) => {
	const { memory } = props;

	return (
		<div className='row'>
			<div className='col-lg-12'>
				{memory.logo && (
					<Fragment>
						{/* for mobile */}
						<img
							className='d-block d-sm-block d-lg-none'
							src={`${process.env.PUBLIC_URL}/${memory.logo}`}
							height='45'
							alt={memory.title}
							style={{
								marginRight: '15px',
								marginTop: '-40px',
								marginBottom: '20px',
								borderRadius: '10px',
							}}
						/>
						{/* for laptop */}
						<img
							className='d-none d-lg-inline-block'
							src={`${process.env.PUBLIC_URL}/${memory.logo}`}
							height='65'
							alt={memory.title}
							style={{
								marginRight: '15px',
								marginTop: '-40px',
								borderRadius: '15px',
							}}
						/>
					</Fragment>
				)}
				{/* for mobile */}
				<h1
					className='d-block d-sm-block d-lg-none'
					src={`${process.env.PUBLIC_URL}/${memory.logo}`}
					style={{ display: 'inline', fontSize: '2rem' }}
				>
					{memory.title}
				</h1>
				{/* for laptop */}
				<h1
					className='d-none d-lg-inline-block'
					style={{ display: 'inline', fontSize: '4rem' }}
				>
					{memory.title}
				</h1>
			</div>
			<div
				className='col-12'
				style={{
					marginTop: '10px',
					lineHeight: '1.5',
					textAlign: 'justify',
					fontWeight: 'light',
					fontFamily: 'Open Sans, sans-serif',
				}}
			>
				{memory.description}
				<div
					style={{
						marginTop: '10px',
						opacity: 0.4,
					}}
				>
					{renderSwitch(memory.status)}
				</div>
				{memory.link && (
					<Fragment>
						<a
							href={memory.link}
							className='link'
							style={{ marginRight: '20px' }}
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faLink} /> <small>Link</small>
						</a>
					</Fragment>
				)}
				{memory.source && (
					<Fragment>
						<a
							href={memory.source}
							className='link'
							style={{ marginRight: '20px' }}
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faGithub} /> <small>Source</small>
						</a>
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default Navigation;

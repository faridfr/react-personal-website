import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircle,
	faDotCircle,
	faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';

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
	const { experience } = props;

	return (
		<div className='row'>
			<div className='col-lg-12'>
				{/* for mobile */}
				<img
					className='d-block d-sm-block d-lg-none'
					src={`${process.env.PUBLIC_URL}/${experience.logo}`}
					height='45'
					alt={experience.title}
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
					src={`${process.env.PUBLIC_URL}/${experience.logo}`}
					height='65'
					alt={experience.title}
					style={{
						marginRight: '15px',
						marginTop: '-40px',
						borderRadius: '15px',
					}}
				/>
				{/* for mobile */}
				<h1
					className='d-block d-sm-block d-lg-none'
					src={`${process.env.PUBLIC_URL}/${experience.logo}`}
					style={{ display: 'inline', fontSize: '2rem' }}
				>
					{experience.title}
				</h1>
				{/* for laptop */}
				<h1
					className='d-none d-lg-inline-block'
					style={{ display: 'inline', fontSize: '4rem' }}
				>
					{experience.title}
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
				{experience.description}
				<div
					style={{
						marginTop: '10px',
						opacity: 0.4,
					}}
				>
					{renderSwitch(experience.status)}
				</div>
			</div>
		</div>
	);
};

export default Navigation;

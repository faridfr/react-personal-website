import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
	const { experience } = props;

	return (
		<div className='row'>
			<div className='col-lg-12'>
				<Link to={process.env.PUBLIC_URL + '/'} className='link'>
					<FontAwesomeIcon
						icon={faChevronLeft}
						style={{ marginRight: '15px' }}
					/>
				</Link>
				{/* <span>{experience.title}</span> */}
				<span className='d-none d-lg-block' style={{ float: 'right' }}>
					{experience.time}
				</span>
			</div>
		</div>
	);
};

export default Navigation;

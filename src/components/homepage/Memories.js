import React from 'react';
import { Link } from 'react-router-dom';

const Memories = (props) => {
	const memories = props.memories;

	return (
		<div className='skills'>
			<div className='title'>Memories</div>
			<div className='row skills'>
				<div
					className='col-12'
					style={{ marginTop: '35px', marginBottom: '15px' }}
				>
					{memories.map((memory) => (
						<Link
							to={process.env.PUBLIC_URL + '/memory/' + memory.title}
							className='link'
						>
							<span
								className='badge badge-light'
								style={{
									fontFamily: 'farid',
									marginRight: '7px',
									marginBottom: '7px',
									fontSize: '0.9rem',
								}}
							>
								{memory.title}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Memories;

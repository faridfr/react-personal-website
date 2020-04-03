import React from 'react';

const Intro = props => {
	const info = props.info;

	return (
		<div className='intro'>
			<h1>Hi,</h1>
			<h1>
				I'm{' '}
				<span style={{ color: '#FD1056' }}>
					{info.name.split(' ')[0]} {info.name.split(' ')[1].substring(0, 2)}
				</span>
				{info.name.substring(
					info.name.split(' ')[0].length + 3,
					info.name.length
				)}
				,
			</h1>
			<h1>{info.jobTitle}</h1>
		</div>
	);
};

export default Intro;

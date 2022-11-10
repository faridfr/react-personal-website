import React from 'react';
import Images from './Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Divider from '../layout/Divider';
import About from './About';

const Intro = props => {
	const info = props.info;
	const contact = props.contact;

	return (
		<div className='h-100'>
			<Images images={info.images}></Images>

			<div className='h-100'>
				<div className="sticky">
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
					<div>
						<div className='description' style={{ fontFamily: 'farid' , marginTop : '20px' }}>
						{contact.mobile}
						<br></br>
						{contact.email}
						<br></br>
						<a
							className='link'
							href={'http://github.com/' + contact.github}
							style={{ marginRight: '8px' }}
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a className='link' href={'http://linkedin.com/' + contact.linkedin}>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
					</div>
					<Divider size='large' />
					<About about={info.about} />
				</div>
			</div>
	</div>

	);
};

export default Intro;

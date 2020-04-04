import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import Header from './Header';
import Divider from '../layout/Divider';

const ExperiencePage = (props) => {
	const { experiences, settings } = props.data;

	const Container = styled.div`
		height: 100vh;
		overflow-y: scroll;
		background-color: ${settings.backgroundColor};
		position: relative;
		color: ${settings.textColor};
		padding: ${settings.padding}px;
		width: 100%;
	`;

	let { title } = useParams();

	return (
		<Fragment>
			{experiences
				.filter((e) => e.title === title)
				.map((experience) => (
					<Container>
						<Navigation experience={experience} />
						<Divider size='large' />
						<Header experience={experience} />
					</Container>
				))}
		</Fragment>
	);
};

export default ExperiencePage;

import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ExperiencePage = (props) => {
	const { experiences, settings } = props.data;

	const Container = styled.div`
		height: 100vh;
		overflow-y: scroll;
		background-color: ${settings.backgroundColor};
		position: relative;
		color: ${settings.textColor};
		padding: ${settings.padding}px;
	`;

	let { title } = useParams();

	return (
		<Fragment>
			{experiences
				.filter((e) => e.title === title)
				.map((experience) => (
					<Fragment>
						<Container>
							salam {title} <p>{experience.description}</p>
						</Container>
					</Fragment>
				))}
		</Fragment>
	);
};

export default ExperiencePage;

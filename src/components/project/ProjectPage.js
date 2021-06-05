import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import Header from './Header';
import Divider from '../layout/Divider';
import Slider from './Slider';
import DetailsTable from './DetailsTable';

const ProjectPage = (props) => {
	const { projects, settings } = props.data;

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
			{projects
				.filter((e) => e.title === title)
				.map((projects) => (
					<Container>
						<Navigation projects={projects} />
						<Divider size='xlarge' />
						<Header projects={projects} />
						<Divider size='large' />
						{projects.images !== undefined ? (
							<Fragment>
								<Slider projects={projects} />
								<Divider size='medium' />
							</Fragment>
						) : null}
						<DetailsTable projects={projects}></DetailsTable>
					</Container>
				))}
		</Fragment>
	);
};

export default ProjectPage;

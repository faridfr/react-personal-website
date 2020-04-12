import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import Header from './Header';
import Divider from '../layout/Divider';
import Slider from './Slider';

const MemoryPage = (props) => {
	const { memories, settings } = props.data;

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
			{memories
				.filter((e) => e.title === title)
				.map((memory) => (
					<Container>
						<Navigation memory={memory} />
						<Divider size='xlarge' />
						<Header memory={memory} />
						<Divider size='large' />
						{memory.images !== undefined ? (
							<Fragment>
								<Slider memory={memory} />
								<Divider size='medium' />
							</Fragment>
						) : null}
					</Container>
				))}
		</Fragment>
	);
};

export default MemoryPage;

import React from 'react';
import { useParams } from 'react-router-dom';

const ExperiencePage = (props) => {
	let { title } = useParams();

	return <div>salam {title}</div>;
};

export default ExperiencePage;

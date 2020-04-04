import React, { Fragment } from 'react';
import Images from './Images';
import Info from './Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const HomePage = (props) => {
	const data = props.data;
	return (
		<Fragment>
			<Images images={data.info.images}></Images>
			<Info data={data}></Info>
		</Fragment>
	);
};

export default HomePage;

import React from 'react';
import Images from './Images';
import Info from './Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const HomePage = (props) => {
	const data = props.data;
	return (
		<div className='container-fluid'>
			<div className='row'>
				<Images images={data.info.images}></Images>
				<Info data={data}></Info>
			</div>
		</div>
	);
};

export default HomePage;

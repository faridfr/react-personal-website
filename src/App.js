import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/jquery.toast.css';
import Images from './components/homepage/Images';
import Info from './components/homepage/Info';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);
function App() {
	const data = require('./config.json');
	return (
		<div className='container-fluid'>
			<div className='row'>
				<Images images={data.info.images}></Images>
				<Info data={data}></Info>
			</div>
		</div>
	);
}

export default App;

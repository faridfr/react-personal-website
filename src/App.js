import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/jquery.toast.css';
import Images from './components/homepage/Images';
import Info from './components/homepage/Info';

const data = {
	info: {
		name: 'Farid Froozan',
		jobTitle: 'Full Stack Developer'
	}
};

function App() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<Images></Images>
				<Info data={data}></Info>
			</div>
		</div>
	);
}

export default App;

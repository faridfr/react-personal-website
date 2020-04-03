import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/jquery.toast.css';
import Images from './components/homepage/Images';
import Info from './components/homepage/Info';

const data = {
	info: {
		name: 'Farid Froozan',
		jobTitle: 'Full Stack Developer',
		about:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, reprehenderit culpa, tempore dolorem asperiores nesciunt accusantium quibusdam doloremque voluptate quas aliquam et molestias accusamus velit, incidunt pariatur obcaecati. Cupiditate, laborum?'
	},
	contact: {
		mobile: '+98 936 496 1262',
		email: 'froozan [at] yahoo.com'
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

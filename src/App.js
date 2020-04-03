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
	},
	skills: [
		{
			header: {
				name: 'server side',
				color: 'rgb(255, 193, 7, 0.5)',
				percent: '90'
			},
			skills: [
				{ name: 'php', degree: 'senior' },
				{ name: 'node js', degree: 'intermediate' }
			]
		},
		{
			header: {
				name: 'client side',
				color: 'rgb(8, 253, 216, 0.5)',
				percent: '60'
			},
			skills: [
				{ name: 'php', degree: 'senior' },
				{ name: 'node js', degree: 'intermediate' }
			]
		}
	],
	experience: {}
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

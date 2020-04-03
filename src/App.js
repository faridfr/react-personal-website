import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/jquery.toast.css';
import Images from './components/homepage/Images';
import Info from './components/homepage/Info';

const data = {
	settings: {
		textColor: 'white',
		backgroundColor: '#1d1d1d',
		padding: '50',
	},
	info: {
		name: 'Farid Froozan',
		jobTitle: 'Full Stack Developer',
		about:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, reprehenderit culpa, tempore dolorem asperiores nesciunt accusantium quibusdam doloremque voluptate quas aliquam et molestias accusamus velit, incidunt pariatur obcaecati. Cupiditate, laborum?',
		images: [
			{
				background_image: `${process.env.PUBLIC_URL}/img/1.jpg`,
				background_position: 'center',
			},
			{
				background_image: `${process.env.PUBLIC_URL}/img/2.jpg`,
				background_position: 'center',
			},
			{
				background_image: `${process.env.PUBLIC_URL}/img/3.jpg`,
				background_position: 'left',
			},
			{
				background_image: `${process.env.PUBLIC_URL}/img/4.jpg`,
				background_position: 'right',
			},
		],
	},
	contact: {
		mobile: '+98 936 496 1262',
		email: 'froozan [at] yahoo.com',
	},
	skills: [
		{
			header: {
				name: 'server side',
				color: 'rgb(255, 193, 7, 0.5)',
				percent: '90',
			},
			skills: [
				{ name: 'php', degree: 'senior' },
				{ name: 'node js', degree: 'intermediate' },
			],
		},
		{
			header: {
				name: 'client side',
				color: 'rgb(8, 253, 216, 0.5)',
				percent: '60',
			},
			skills: [
				{ name: 'php', degree: 'senior' },
				{ name: 'node js', degree: 'intermediate' },
			],
		},
	],
	experiences: [
		{
			logo: 'img/logos/farazin-color.png',
			title: 'CTO - Farazin',
			time: 'Aug 2018 - Present',
			description:
				'Leader of development team , schema designer and Back-End developer Our target is making automate all actions in factory , such asadministrative affairs, production planning, accounting andwarehousing, production line monitoring .',
		},
		{
			logo: 'img/logos/farazin-color.png',
			title: 'CTO - Farazin',
			time: 'Aug 2018 - Present',
			description:
				'Leader of development team , schema designer and Back-End developer Our target is making automate all actions in factory , such asadministrative affairs, production planning, accounting andwarehousing, production line monitoring .',
		},
	],
};

function App() {
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

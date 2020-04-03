import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function App() {
	return (
		<div className='educations'>
			<div className='title'>Educations</div>
			<div className='description' style={{ paddingTop: '30px' }}>
				<div
					className='row'
					id='master'
					style={{ padding: '0px', margin: '0px' }}
				>
					<div className='col-1'>
						<img
							src={`${process.env.PUBLIC_URL}/img/logos/master.png`}
							className='img-fluid company-logo'
							alt='University'
						></img>
					</div>
					<div className='col-8'>
						<h4 style={{ fontFamily: 'farid' }}>Islamic Azad University</h4>
					</div>
					<div className='col-3'>
						<h6 style={{ fontFamily: 'farid', float: 'right' }}>2019 - 2022</h6>
					</div>
					<div
						className='col-11 offset-1'
						style={{ textAlign: 'justify', fontSize: '0.8rem' }}
					>
						<h6>Master's degree - Software Engineering</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

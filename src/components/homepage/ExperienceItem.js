import React from 'react';

function App() {
	return (
		<div className='row' id='farazin'>
			<div className='col-1'>
				<img
					src={`${process.env.PUBLIC_URL}/img/logos/farazin-color.png`}
					className='img-fluid company-logo'
					alt='Farazin'
				></img>
			</div>
			<div className='col-6'>
				<h4 style={{ fontFamily: 'farid' }}>CTO - Farazin</h4>
			</div>
			<div className='col-5'>
				<h6 style={{ fontFamily: 'farid', float: 'right' }}>
					Aug 2018 - Present
				</h6>
			</div>
			<div
				className='col-11 offset-1'
				style={{ textAlign: 'justify', fontSize: '0.8rem' }}
			>
				<h6>
					Leader of development team , schema designer and Back-End developer .
					Our target is making automate all actions in factory , such as
					administrative affairs, production planning, accounting and
					warehousing, production line monitoring .
				</h6>
			</div>
		</div>
	);
}

export default App;

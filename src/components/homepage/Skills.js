import React, { Fragment } from 'react';
import SkillItem from './SkillItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function App() {
	return (
		<Fragment>
			<div className='col-12' style={{ marginTop: '35px' }}>
				<div className='skillName backendTitle'>SERVER SIDE</div>
				<div className='progress' style={{ marginTop: '10px' }}>
					<div className='progress-bar backend' style={{ width: '85%' }}></div>
				</div>
			</div>

			<SkillItem></SkillItem>
		</Fragment>
	);
}

export default App;

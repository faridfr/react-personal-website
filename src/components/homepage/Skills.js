import React from 'react';
import SkillItem from './SkillItem';
import ExperienceItem from './Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function App() {
	return (
		<div className='skills'>
			<div className='title'>
				Skills & <br></br>Exprerience
			</div>

			<div className='description'>
				<div className='row skills'>
					<div className='col-12' style={{ marginTop: '35px' }}>
						<div className='skillName backendTitle'>SERVER SIDE</div>
						<div className='progress' style={{ marginTop: '10px' }}>
							<div
								className='progress-bar backend'
								style={{ width: '85%' }}
							></div>
						</div>
					</div>
					<SkillItem></SkillItem>
				</div>

				<div className='row experience' style={{ marginTop: '60px' }}>
					<ExperienceItem></ExperienceItem>
				</div>
			</div>
		</div>
	);
}

export default App;

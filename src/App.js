import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/jquery.toast.css';
import Homepage from './components/homepage/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router, Route, Switch } from 'react-router-dom';
import ExperiencePage from './components/experience/ExperiencePage';
import MemoryPage from './components/memory/MemoryPage';
import { createBrowserHistory } from 'history';
import SimpleReactLightbox from 'simple-react-lightbox';

library.add(fab, faCheckSquare, faCoffee);
const history = createBrowserHistory();

function App() {
	const data = require('./config.json');
	return (
		<SimpleReactLightbox>
			<Router history={history}>
				<div style={{ 'backgroundColor' : data.settings.backgroundColor}}>
				<div className='container-fluid'>
					<div className='row'>
						<Switch>
							<Route
								exact
								path={process.env.PUBLIC_URL + '/'}
								component={() => <Homepage data={data} />}
							/>
							<Route
								path={process.env.PUBLIC_URL + '/experience/:title'}
								component={() => <ExperiencePage data={data} />}
							/>
							<Route
								path={process.env.PUBLIC_URL + '/memory/:title'}
								component={() => <MemoryPage data={data} />}
							/>
						</Switch>
					</div>
				</div>
				</div>
			</Router>
		</SimpleReactLightbox>
	);
}

export default App;

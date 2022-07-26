import React from 'react';

import StartPage from './pages/StartPage';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

	return (
		<Router>
			<div>
				{/* <Home /> */}
				<Switch>
					<Route exact path="/">
						<StartPage />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;
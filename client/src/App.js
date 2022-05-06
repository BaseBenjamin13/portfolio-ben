
//scripts packages 
import React from 'react';
//components
// import Header from './Header';
import StartPage from './StartPage/StartPage';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

	// const [backendData, setBackendData] = useState([{}])

	// useEffect(() => {
	// 	fetch("/api")
	// 	.then(
	// 		res => res.json()
	// 	)
	// 	.then(
	// 		data => {
	// 			setBackendData(data);
	// 			console.log(backendData);
	// 		}
	// 	)
	// }, [])

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
				
		
				{/* <Router exact={true} path="/" component={StartPage} />

				<Router exact path="/home" component={Home} /> */}
			</div>
		</Router>
	)
}

export default App;
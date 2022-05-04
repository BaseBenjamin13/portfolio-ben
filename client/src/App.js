
//scripts packages 
import React, {useEffect, useState} from 'react'
//components
import Header from './Header'

function App() {

	const [backendData, setBackendData] = useState([{}])

	useEffect(() => {
		fetch("/api").then(
			res => res.json()
		).then(
			data => {
				setBackendData(data);
				console.log(backendData);
			}
		)
	}, [])

	return (
		<div>
			<Header username={"Benj"}/>

			{(typeof backendData === 'undefined') ? (
				<h2>Loading Api...</h2>
			): (
				backendData.map((user, i) => (
						<h2 key={i}>{user.userName}</h2>
					))
			)}

		</div>
	)
}

export default App
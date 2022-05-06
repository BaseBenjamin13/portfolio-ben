import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';




// const [backendData, setBackendData] = useState([{}])

// 	useEffect(() => {
// 		fetch("/api")
// 		.then(
// 			res => res.json()
// 		)
// 		.then(
// 			data => {
// 				setBackendData(data);
// 				console.log(backendData);
// 			}
// 		)
// 	}, [])



function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Header username={"Benj"}/>
        <Link to="/"><button>Start Page</button></Link>
        {/* {(typeof backendData === 'undefined') ? (
            <h2>Loading Api...</h2>
        ): (
            backendData.map((user, i) => (
                    <h2 key={i}>{user.userName}</h2>
                ))
        )} */}
    </div>
  )
}

export default Home
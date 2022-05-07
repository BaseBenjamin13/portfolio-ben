import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
//components
import Header from './Header'; 
import ProjectList from './ProjectList';




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
    <div className="home">
        <Header username={"Benj"}/>
        <Link to="/"><button className="back-btn">Back</button></Link>

        <ProjectList />
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
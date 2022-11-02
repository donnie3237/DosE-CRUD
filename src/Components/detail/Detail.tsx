import React from 'react'
import {Link , useParams} from 'react-router-dom'
import './detail.css'
import { useState ,useEffect } from 'react'
import axios from 'axios'


function Detail() {
	const [user, setUser] = useState({});

	let link = window.location.href
	let userId = link.replace('https://dose-crud.netlify.app/#/list/view/','').toString()
    console.log("userId:"+userId)
	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://dose.herokuapp.com/api/${userId}`
					);
					setUser(response.data[0]);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		}
	);
	console.log(user)
  return (
	<div className="det">
		<h1>รายชื่อ</h1>
	 <h2><h3>Name : </h3><p>{user.name}</p></h2>
	 <h2><h3>height : </h3><p>{user.height} cm</p></h2>
	 <h2><h3>weight : </h3><p>{user.weight} kg</p></h2>
	 <h2><h3>Age : </h3><p>{user.age} years</p></h2>
	 <h2><h3>DesCription : </h3><p>{user.age}</p></h2>

	 <Link className='close' to='/list'>Close</Link>
	 </div>
	)
  }
export default Detail
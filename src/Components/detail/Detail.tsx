import React from 'react'
import {NavLink} from 'react-router-dom'
import './detail.css'
import { useState ,useEffect } from 'react'
import axios from 'axios'

function Detail() {
	const [user, setUser] = useState<any>({});
	let link :string = window.location.href
	let userId :string = link.replace('https://dose-crud.netlify.app/#/list/view/','').toString()
	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response : any = await axios.get(`https://dose-server.onrender.com/see/${userId}`
					);
					setUser(response.data[0]);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		}
	);
  return (
	<div className="det">
	<h1>รายชื่อ</h1>
	 <h2><h3>Name : </h3><p>{user.name}</p></h2>
	 <h2><h3>height : </h3><p>{user.height} cm</p></h2>
	 <h2><h3>weight : </h3><p>{user.weight} kg</p></h2>
	 <h2><h3>Age : </h3><p>{user.age} years</p></h2>
	 <h2><h3>DesCription : </h3><p>{user.descrip}</p></h2>
	 <NavLink className='close' to='/list'>Close</NavLink>
	 </div>
	)
  }
export default Detail
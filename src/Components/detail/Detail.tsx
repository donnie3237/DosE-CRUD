import React from 'react'
import {Link , useParams} from 'react-router-dom'
import './detail.css'
import { useState ,useEffect } from 'react'
import axios from 'axios'


function Detail() {
	const [user, setUser] = useState({});

	let link = window.location.href
	let userId = link.replace('http://localhost:3000/#/list/view/','').toString()
    console.log("userId:"+userId)
	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://dose.herokuapp.com/api/${userId}`
					);
					setUser(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
	);
	console.log(user.name)
  return (
	<>
	{user &&
		user.map((user) => {
			return (
				<tr key={user._id}>
				<td>{user.name}</td>
				<td>{user.age}</td>
				</tr>
				)
			}
		)

	</>
  )
}

export default Detail
import React from 'react'
import {Link , useParams} from 'react-router-dom'
import './detail.css'
import { useState ,useEffect } from 'react'
import axios from 'axios'


function Detail() {
	const [user, setUser] = useState({});

	const { _id } = useParams();

	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://dose.herokuapp.com/api/${_id}`);
					setUser(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
	);
  return (
    <div className="det" >
            <br />
			<h2>Name: {user.name}</h2>

			<p>
				<b>Age</b>: {user.age}
			</p>

			<p>
				<b>Height</b>: {user.height}
			</p>
			<p>
				<b>Weight</b>: {user.weight}
			</p>
			<p>
                <b>Description</b>: {user.descrip}
            </p>
			
            <Link to="/list" className="close">
                Close
            </Link>
        </div>
  )
}

export default Detail
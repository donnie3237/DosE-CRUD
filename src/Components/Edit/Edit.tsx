import React from 'react'
import './edir.css'
import {NavLink,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect , useState} from 'react';

function Edit() {
  const [user, setUser] = useState({});
  const navigate =useNavigate()
	let link = window.location.href
	let userId = link.replace('https://dose-crud.netlify.app/#/list/edit/','').toString()
  	const [name,setName] = useState('')
	const [age,setAge]= useState(0)
	const [height,setHeight]=useState(0)
	const [weight,setWeight]=useState(0)
	const [desc,setDesc]=useState('')
	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://crud-server-7mzw.vercel.app/see/${userId}`
					);
					setUser(response.data[0]);
				} catch (error) {
					console.log("error", error);
				}
				setName(document.getElementById('name').value)
			  	setAge(document.getElementById('age').value)
			 	setHeight(document.getElementById('height').value)
			  	setWeight(document.getElementById('weight').value)
			  	setDesc(document.getElementById('desc').value)
			}
			getCrudById();
		}
	);
	function updateData() {
			axios.put(`https://crud-server-7mzw.vercel.app/update/${userId}`,{
						name :name,
						age:age,
						height:height,
						weight:weight,
						descrip :desc
					});
			alert(`${name} has been Updateted!`)
			navigate("/list");
		} 
  return (
    <div className="edit">
      <h1>Edit Data!!</h1>
        <div className="myfrom">
            <input id='name' type="text" placeholder='New name'  defaultValue={user.name} onChange={(e) => {setName(e.target.value)}} />
            <input id='age' type="number" placeholder='New age' defaultValue={user.age}  onChange={(e) => {setAge(e.target.value)}}/>
            <input id='height' type="number" placeholder='New height' defaultValue={user.height} onChange={(e) => {setHeight(e.target.value)}}/>
            <input id='weight' type="number" placeholder='New weight' defaultValue={user.weight} onChange={(e) => {setWeight(e.target.value)}}/>
            <textarea id='desc' rows="5" placeholder='New Description' defaultValue={user.descrip} onChange={(e) => {setDesc(e.target.value)}}></textarea>
            <div className="btng">
                <button className='editt' onClick={updateData}>Edit</button>
                <NavLink to='/list' className='etli'>Close</NavLink>
            </div>
        </div>
        <ToastContainer
				position="top-right"
				autoClose={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
		/>
    </div>
  )
}

export default Edit
import React from 'react'
import './edit.scss'
import {NavLink,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect , useState} from 'react';
import { APiURL } from '../../api';

function Edit() {
  const [user, setUser] = useState({});
  const navigate =useNavigate()
	let link = window.location.href
	let userId = link.replace('https://dose-crud.netlify.app/#/list/edit/','').toString()
  	const [name,setName] = useState<string>('')
	const [age,setAge]= useState<number>(0)
	const [height,setHeight]=useState<number>(0)
	const [weight,setWeight]=useState<number>(0)
	const [desc,setDesc]=useState<string>('')
	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`${APiURL}/see/${userId}`
					);
					setUser(response.data[0]);
				} catch (error) {
					console.log("error", error);
				}
				const NaMe : any = document.getElementById('name');
				const Age :any = document.getElementById('age') as HTMLInputElement;
				const Height :any = document.getElementById('height') as HTMLInputElement;
				const Weight :any = document.getElementById('weight') as HTMLInputElement;
				const desc  = document.getElementById('desc') as HTMLTextAreaElement;
				setName(NaMe.value)
			  	setAge(Age.value)
			 	setHeight(Height.value)
			  	setWeight(Weight.value)
			  	setDesc(desc.value)
			}
			getCrudById();
		}
	);
	function updateData() {
			axios.put(`https://dose-server.onrender.com/update/${userId}`,{
						name : name,
						age : age,
						height : height,
						weight : weight,
						descrip : desc
					}).then((Response)=>{
						if(Response.data === "Updated"){
							toast.success(`${name} has been updated`)
						}
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
            <textarea id='desc' placeholder='New Description' defaultValue={user.descrip} onChange={(e) => {setDesc(e.target.value)}}></textarea>
            <div className="btng">
                <button className='editt' onClick={updateData}>Edit</button>
                <NavLink to='/list' className='etli'>Close</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Edit
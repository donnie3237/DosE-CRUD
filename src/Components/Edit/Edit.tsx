import React from 'react'
import './edir.css'
import {Link,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect , useState} from 'react';

function Edit() {
    
  const [user, setUser] = useState({});
  const navigate =useNavigate()
	let link = window.location.href
	let userId = link.replace('http://localhost:3000/#/list/edit/','').toString()
    // console.log("userId:"+userId)
    // console.log(user)
  const [name,setName] = useState('')
	const [age,setAge]= useState(0)
	const [height,setHeight]=useState(0)
	const [weight,setWeight]=useState(0)
	const [desc,setDesc]=useState('')
  console.log('name :'+name,'\n','age:' +age,'\n','height:'+height,'\n','weight:'+weight,'\n','description:'+desc)
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
   async function updateData(){
    
		axios.post("https://dose.herokuapp.com/api",{
			name :name,
			age:age,
			height:height,
			weight:weight,
			descrip :desc
		})
     await axios.delete(`https://dose.herokuapp.com/api/${userId}`)
    navigate("/list");
		toast.success('your data has been updated!',{
			position:"bottom-right"}
		)
	}

  return (
    <div className="edit">
      <h1>Edit Data!!</h1>
        <div className="myfrom">
            <input type="text" placeholder='New name'  defaultValue={user.name} onChange={(e) => {setName(e.target.value)}} />
            <input type="number" placeholder='New age' defaultValue={user.age}  onChange={(e) => {setAge(e.target.value)}}/>
            <input type="number" placeholder='New height' defaultValue={user.height} onChange={(e) => {setHeight(e.target.value)}}/>
            <input type="number" placeholder='New weight' defaultValue={user.weight} onChange={(e) => {setWeight(e.target.value)}}/>
            <textarea  rows="5" placeholder='New Description' value={user.descrip} onChange={(e) => {setDesc(e.target.value)}}></textarea>
            <div className="btng">
                <button className='editt' onClick={updateData}>Edit</button>
                <Link to='/list' className='etli'>Close</Link>
                
            </div>
        </div>
        <ToastContainer
				position="bottom-right"
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
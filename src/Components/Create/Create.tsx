import React from 'react'
import {useState} from 'react';
import './create.css'
import Axios from "axios";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
AOS.init();

function Create(){
	const [name,setName] = useState('')
	const [age,setAge]= useState(0)
	const [height,setHeight]=useState(0)
	const [weight,setWeight]=useState(0)
	const [desc,setDesc]=useState('')
	function postData(){
		Axios.post("https://dose-server.onrender.com/api",{
			name :name,
			age:age,
			height:height,
			weight:weight,
			descrip :desc
		})
		toast.success(`${name} has been created!`,{
			position:"bottom-right"}
		)
		document.getElementById('name').value = ''
		document.getElementById('age').value =''
		document.getElementById('height').value = ''
		document.getElementById('weight').value = ''
		document.getElementById('desc').value = ''
		setAge(0)
		setName('')
		setHeight(0)
		setWeight(0)
		setDesc('')
	}
	function handleClick(){
		let w50 = document.getElementById('w50');	
		let change = document.getElementById('change');
		w50.style.width = '50%';
		w50.style.transition = 'width 1s';
		change.style.display = 'none';
	}
	return (
		<div className='Allcr' >
			<div className="from" data-aos='zoom-out' >
				<div className="from-title">
					<h2>Create Data</h2>
				</div>
				<div className="from-content">
					<div className="from-content-title">
						<div className="input">
							<label>Name</label>
							<input type="text" 
								placeholder='YourName' 
								id='name' 
								name="name"
								onChange={(e) => {setName(e.target.value)}}
							/>
						</div>
						<div className="input">  
							<label >Age</label>
						<input type="number" 
							placeholder='YourAge(Y)' 
							id='age' 
							onChange={(e) => {setAge(e.target.value)}}
						/>
						</div>
						<div className="input">  
							<label >Height</label>
						<input type="number" 
							placeholder='YourHeight(cm)' 
							id='height' 
							onChange={(e) => {setHeight(e.target.value)}}
						/>
						</div>
						<div className="input">  
							<label >Weight</label>
						<input type="number" 
							placeholder='YourWeight(kg)' 
							id='weight' 
							onChange={(e) => {setWeight(e.target.value)}}
							/>
							
						</div>
					</div>
					<div className="textarea">
						<label>Description</label>
						<textarea placeholder='YourDescription' 
							rows={5} 
							name='descrip' 
							id='desc'
							onChange={(e) => {setDesc(e.target.value)}}
						/>
					</div>
					<button className='btn' onClick={postData} >create</button>
				</div>
				<div className="imgr" id='w50' onClick={handleClick}>
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

export default Create


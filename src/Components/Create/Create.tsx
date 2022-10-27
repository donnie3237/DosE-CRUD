import React from 'react'
import {useState} from 'react';
import './create.css'
import Axios from "axios";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

AOS.init();

function Create(props) {
	const [name,setName] = useState('')
	const [age,setAge]= useState(0)
	const [height,setHeight]=useState(0)
	const [weight,setWeight]=useState(0)
	const [desc,setDesc]=useState('')
	console.log(name+age+height+weight+desc)
	
	const navigate = useNavigate();

	const addData = async e => {
		e.preventDefault();
		try {
		  	  await Axios.post("/api", {
			  name,age,height,weight,desc
			}
		  );
		  toast.success('your data has been created!', {
			position: "bottom-right",
			theme:'dark',
			autoClose: false,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: 1,
			});
		} catch (err) {
			toast.error('เกิดบัคแล้วว!!', {
				position: "bottom-right",
				theme:'dark',
				autoClose: false,
				hideProgressBar: true,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: 1,
			});
		}
	  };
	
	function handleClick(){
		let w50 = document.getElementById('w50');	
		let change = document.getElementById('change');
		
		// add class avtive
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
							id='weight' 
							onChange={(e) => {setHeight(e.target.value)}}
						/>
						</div>
						<div className="input">  
							<label >Weight</label>
						<input type="number" 
							placeholder='YourWeight(kg)' 
							id='height' 
							onChange={(e) => {setWeight(e.target.value)}}
							/>
							
						</div>
					</div>
					<div className="textarea">
						<label>Description</label>
						<textarea placeholder='YourDescription' 
							rows={5} 
							name='descrip' 
							onChange={(e) => {setDesc(e.target.value)}}
						/>
					</div>
					<button className='btn' onClick={addData}>create</button>
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


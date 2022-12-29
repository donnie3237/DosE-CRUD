import React from 'react'
import {useState} from 'react';
import './create.css'
import Axios from "axios";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { toast } from 'react-toastify';
AOS.init();

function Create(){
	const [name,setName] = useState<string>('')
	const [age,setAge] = useState<number>(0)
	const [height,setHeight]=useState<number>(0)
	const [weight,setWeight]=useState<number>(0)
	const [desc,setDesc]=useState<string>('')
	function postData(){
		if(name !== '' && age !== 0 && height !== 0 && weight !== 0 && desc !== ''){
			Axios.post("https://dose-server.onrender.com/add",{
				name :name,
				age:age,
				height:height,
				weight:weight,
				descrip :desc
			}).then((response)=>{
				if(response.data === 'success'){
				toast.success(`${name} has been created!`,{
					position:"bottom-right"}
				)
				const TheName =document.getElementById('name') as HTMLInputElement ;
				const TheAge = document.getElementById('age') as HTMLInputElement ;
				const TheHeight =document.getElementById('height') as HTMLInputElement ;
				const TheWeight = document.getElementById('weight') as HTMLInputElement ;
				const TheDesc = document.getElementById('desc') as HTMLInputElement ;
				TheName.value = '' ;
				TheAge.value = '' ;
				TheHeight.value = '' ;
				TheWeight.value = '' ;
				TheDesc.value = '' ;
				setAge(0)
				setName('')
				setHeight(0)
				setWeight(0)
				setDesc('')
				}
		}).catch(
			(error)=>{
				toast.warn("server is not ready!!")
			}
		)
		}else{
			toast.warn("กรุณากรอกข้อมูลให้ครบถ้วน!!")
		}
	}
	function handleClick(){
		const w50 : any = document.getElementById('w50') as HTMLElement ;	
		const change : any = document.getElementById('change') as HTMLElement ;
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
		</div>
  )
}

export default Create


import React from 'react'
import {NavLink , useNavigate} from 'react-router-dom'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import './delete.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeletePage() {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    let link = window.location.href
	let userId = link.replace('https://dose-crud.netlify.app/#/list/delete/','').toString()
	console.log(userId)
    useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://dose-server.onrender.com/api/${userId}`
					);
					setUser(response.data[0]);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		}
	);
    function Nope(){
        ConFrim.style.left = '100%'
        ConFrim.style.transition = 'all 0.5s';
    }
    async function useDelete() {
		try {
			await axios.delete(`https://dose-server.onrender.com/api/${userId}`);
			navigate("/list");
            toast.warn(`${user.name} has been deleted!`,{
                position:"bottom-right"}
            )
		} catch (error) {
			console.error(error);
		}
	}
    function Delete(){
		var ConFrim = document.getElementById('ConFrim');	
		// add class avtive
		ConFrim.style.left = '10%';
		ConFrim.style.transition = 'all 0.5s';
	}
  return (
    <div className='deletePage'>
        <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
                <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <p>DeletePage!!</p>
        </div>
        <h2>name: <p>{user.name}</p></h2>
        <h2>Age: <p>{user.age}</p></h2>
        <h2>Height: <p>{user.height}</p></h2>
        <h2>Weight: <p>{user.weight}</p></h2>
        <h2>DesCription : <p>{user.descrip}</p></h2>
        <div className="botton">
            <a className='Red' id='Delete' onClick={Delete}>Delete</a>
            <NavLink to='/list' className='White'>Back</NavLink>
        </div>
        <div className="confrim" id='ConFrim'>
            <p>Are you Sure To delete!!</p>
            <div className="sure">
                <a  className='yes' onClick={useDelete}>Yes!!</a>
                <a  className='no' id='exit' onClick={Nope}>No</a>
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

export default DeletePage
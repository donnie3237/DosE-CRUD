import React from 'react'
import {NavLink , useNavigate} from 'react-router-dom'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import './delete.scss'
import { toast } from 'react-toastify';
function DeletePage() {
    const navigate : any = useNavigate();
    const [user, setUser] = useState<any>([]);
    let link : string = window.location.href
	let userId : string = link.replace('https://dose-crud.netlify.app/#/list/delete/','').toString()
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
    function Nope(){
        let ConFrim = document.getElementById('ConFrim') as HTMLElement;
        ConFrim.style.left = '100%'
        ConFrim.style.transition = 'all 0.5s';
    }
    const imDelete : any = ()=>{
        axios.delete(`https://dose-server.onrender.com/delete/${userId}`);
        toast.warn(`${user.name} has been deleted!`
        )
        navigate("/list");
    }
    function Delete(){
        let ConFrim = document.getElementById('ConFrim') as HTMLElement;
		ConFrim.style.left = '10vw';
		ConFrim.style.transition = 'all 0.5s';
	}
  return (
    <div className='deletePage'>
        <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <p>DeletePage!!</p>
        </div>
        <h2>Name : <p>{user.name}</p></h2>
        <h2>Age : <p>{user.age}</p></h2>
        <h2>Height : <p>{user.height}</p></h2>
        <h2>Weight : <p>{user.weight}</p></h2>
        <h2>DesCription : <p>{user.descrip}</p></h2>
        <div className="botton">
            <div className='Red' id='Delete' onClick={Delete}>Delete</div>
            <NavLink to='/list' className='White'>Back</NavLink>
        </div>
        <div className="confrim" id='ConFrim'>
            <p>Are you Sure To delete!!</p>
            <div className="sure">
                <div className='yes' onClick={imDelete}>Yes!!</div>
                <div className='no' id='exit' onClick={Nope}>No</div>
            </div>
        </div>
    </div>
  )
}

export default DeletePage
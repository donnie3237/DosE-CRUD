import React from 'react'
import './edir.css'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit() {
    const noti = ()=>{toast.success('Edit success!', {
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
  return (
    <div className="edit">
        <div className="myfrom">
            <input type="text" placeholder='New name' />
            <input type="number" placeholder='New age' />
            <input type="number" placeholder='New height' />
            <input type="number" placeholder='New weight' />
            <textarea  rows="5" placeholder='New Description'></textarea>
            <div className="btng">
                <button className='editt' onClick={noti}>Edit</button>
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
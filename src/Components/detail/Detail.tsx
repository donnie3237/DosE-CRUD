import React from 'react'
import data from '../data.json'
import {Link} from 'react-router-dom'
import './detail.css'

function Detail() {
  return (
    <div className="det" key={data.id}>
            <br />
			<h2>Name:</h2>

			<p>
				<b>Age</b>: {data.age}
			</p>

			<p>
				<b>Height</b>: {data.height}
			</p>
			<p>
				<b>Weight</b>: {data.weight}
			</p>
			<p>
                <b>Description</b>: {}
            </p>
			
            <Link to="/list" className="close">
                Close
            </Link>
        </div>
  )
}

export default Detail
import React from 'react'
import './footer.css'
import logo from './img/logo.png'

function Footer() {
 return (
    <div className='foott'>
      <div className="ftop">
        <div className="Logof">
          <img src={logo} alt="" />
        </div>
        <div className="ftop2">
          <p>Serverhost: 8080</p>
          <p>compass : mongodb+srv://dose:1234@firstdatabase.m0bf5u9.mongodb.net/test</p>
          <p>Email : paradorn3237@gmail.com</p>
          <a href="https://www.facebook.com/profile.php?id=100007215521248">FaceBook</a>
          <a href="https://twitter.com/Ksfdd1">TwitTer</a>
          </div>
      </div>
        <p className='footb'>MadeBy:<div className='pink'>Paradorn Lungchoy</div> </p>
        
    </div>
  )
}

export default Footer
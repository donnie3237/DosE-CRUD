/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
import logo from './img/logo.png'
function Header() {
  return (
    <div className='headpage'>

        <div className="logo">
          <img src={logo} className='logo2'/>
          <a href="/">DOSE</a>
        </div>
        <nav>
            <NavLink className='eiei Agreen' to='/create'>CREATE</NavLink>
            <NavLink className='eiei Ablue' to='/list'>DATA</NavLink>
            <NavLink className='eiei Aorange' to='/api'>API</NavLink>
            <NavLink className='eiei Apurple' to='/data'>DATABASE</NavLink>
        </nav>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-dom'
import logo from '../assets/float-logo.png'

//TODO make Ps into links to associated page

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/> 
            <h1>Float With the Most</h1>
            <p>Home</p>  
            <p>Events</p>
            <p>Profile</p>
            <p>About</p>
        </header>
    )
}

export default Header;
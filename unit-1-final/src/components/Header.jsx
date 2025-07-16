import React from 'react';
import { Link } from 'react-dom';
import logo from '../assets/new-float-logo.png';
import NavBar from './NavBar';

//TODO make Ps into links to associated page

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/> 
            <h1>Float With the Most</h1>
            <NavBar />
        </header>
    )
}

export default Header;
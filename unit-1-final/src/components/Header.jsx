import React from 'react';
import logo from '../assets/new-float-logo.png';
import NavBar from './NavBar';


const Header = () => {
    return (
        <header>
            <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/> 
            <h1>Float With the Most</h1>
            <NavBar />
        </header>
    );
}

export default Header;
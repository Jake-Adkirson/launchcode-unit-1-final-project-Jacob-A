import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router';
import logo from '../assets/new-float-logo.png';
import NavBar from './NavBar';


const Header = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const navigateTo = useNavigate();

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePassChange = (e) => {
        setUserPass(e.target.value);
    }

    const handleIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const handleShowLogin = () => {
        setShowLogin(!setShowLogin);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'email@email.com',
            password: 'password123',
        }

        if ((userEmail == hardcodedCred.email) && (userPass == hardcodedCred.password)) {
            const token = '12345abcde';
            sessionStorage.setItem('auth-token', token);
            navigateTo('/events_page');
        } else {
            alert('Please enter a valid email and password.');
        }
    }

    if (isLoggedIn === true){    

    return (
        <header>
            <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/> 
            <div className="LogSign">
                {showLogin ? (
                    <button type="submit" onClick={handleShowLogin}>Sign In</button>
                ) : (
                <form onSubmit={handleLogin}>
                    Email: <input type="text" name="email" value={userEmail} placeholder="Enter email..." onChange={handleEmailChange} />
                    Password: <input type="text" name="password" value={userPass} placeholder="Enter password..." onChange={handlePassChange} />
                    <br/>
                    <button type="submit" onClick={handleIsLoggedIn}>Sign In</button>
            </form>
                )}
            </div>
            <h1>Float With the Most</h1>
            <NavBar />
        </header>
        );
    } else {
        return(
        <header>
            <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/> 
            <div className="LogSign">
            <p>Thank you for signing in!</p>
            <button type="submit" onClick={handleIsLoggedIn}>Sign Out</button>
            </div>
            <h1>Float With the Most</h1>
            <NavBar />
        </header>
        )
    }
}

export default Header;
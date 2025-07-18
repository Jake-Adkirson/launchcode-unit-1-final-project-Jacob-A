import { React } from 'react';
import { Link } from 'react-router';
import logo from '../assets/new-float-logo.png';
import NavBar from './NavBar';
import SignIn from './SignIn';


const Header = ({ isLoggedIn }) => {


    if (isLoggedIn === true){    
    return (
        <header>
            <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/> 
            <div className="LogSign">
            <button>
            <Link to="/welcome/sign_in">Sign In</Link>
            </button>
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
            <button type="submit">Sign Out</button>
            </div>
            <h1>Float With the Most</h1>
            <NavBar />
        </header>
        )
    }
}

export default Header;
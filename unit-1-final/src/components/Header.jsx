import logo from '../assets/new-float-logo.png';
import { Link } from 'react-router';
import NavBar from './NavBar';
import SignInSignUp from './SignInSignUp';


const Header = () => {
    const localSignIn = localStorage.getItem('signUp');

    const logout = () => {
        localStorage.removeItem("signUp");
        window.location.reload();
    }
    const deleteAccount = () => {
        localStorage.clear();
        window.location.reload();
    }
    if (localSignIn === null){
        return (
            <header>
                <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/>
                <br/>
                <button>
                <Link to='/sign_in_sign_up'>Sign In</Link> 
                </button>
                <button disabled>Delete Account</button>
                <h1>Float With the Most</h1>
                <NavBar />
            </header>
    );
} else {
    return(
            <header>
                <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/>
                <br/>
                <button onClick={logout}>Sign Out</button>
                <button onClick={deleteAccount}>Delete Account</button>
                <h1>Float With the Most</h1>
                <NavBar />
            </header>
        );
    }
}
export default Header;
import { Link } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const SignIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigateTo = useNavigate();

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePassChange = (e) => {
        setUserPass(e.target.value);
    }

    const handleIsLoggedIn = () => {
        setIsLoggedIn(true);
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

    return(
        <div className="SignIn">
            <h2>Sign In</h2>
            <form onSubmit={handleLogin}>
                Email: <input type="text" name="email" value={userEmail} placeholder="Enter email..." onChange={handleEmailChange} />
                Password: <input type="text" name="password" value={userPass} placeholder="Enter password..." onChange={handlePassChange} />
                <br/>
                <button type="submit" onClick={handleIsLoggedIn}>Sign In</button>
                <Header isLoggedIn={isLoggedIn} />
            </form>
            <br/>
            <p>Don't have an account? Sign up <Link to="/sign_up">here</Link></p>
        </div>
    );
}

export default SignIn;
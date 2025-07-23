import React, { useState, useEffect, useRef } from 'react';
import WelcomePage from './WelcomePage';

const SignInSignUp = () => {
    const name =  useRef();
    const email = useRef();
    const password = useRef();
    const age = useRef();
    const state = useRef();
    const prefWatercraft = useRef();
    const localSignIn = localStorage.getItem('signUp');
    const localEmail = localStorage.getItem('email');
    const localPassword = localStorage.getItem('password');
    const [showWelcome, setShowWelcome ] = useState(false);
    const [show, setShow] = useState(false);

    useEffect( () => {
        if(localSignIn){
            setShowWelcome(true);
        }
        if(localEmail){
            setShow(true);
        }
    })

    const handleClick = () => {
        if(email.current.value && password.current.value)
        {
            localStorage.setItem('name', name.current.value);
            localStorage.setItem('email', email.current.value);
            localStorage.setItem('password', password.current.value);
            localStorage.setItem('age', age.current.value);
            localStorage.setItem('prefWatercraft', prefWatercraft.current.value);
            localStorage.setItem('state', state.current.value);
            localStorage.setItem('signUp', email.current.value);
            alert('Account created successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    }

    const handleSignIn = () => {
        if(email.current.value == localEmail && password.current.value == localPassword){
            localStorage.setItem("signUp", email.current.value);
            alert('Sign in successful.');
            window.location.reload();
        } else {
            alert('Please enter valid login.');
        }
    }

    return(
    <div>
        {showWelcome ? <WelcomePage /> :
        (show ?
        <div className="SignIn">
            <h2>Sign In</h2>
            <form>
                Email: <input required type="email" name="email" ref={email} placeholder="Enter email..." />
                Password: <input required type="password" name="password" ref={password} placeholder="Enter password..." />
                <br/>
                <button onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
        : 
        <div className="SignUp">
            <h2>Sign Up</h2>
            <form>
                Name: <input required type="text" name="name" ref={name} placeholder="Enter name..." />
                Age: <input required type="text" name="age" ref={age} placeholder="Enter age..." />
                Preferred Watercraft: <input required type="text" name="prefWatercraft" ref={prefWatercraft} placeholder="Enter watercraft..." />
                State: <input required type="text" name="state" ref={state} placeholder="Enter state..." />
                Email: <input required type="email" name="email" ref={email} placeholder="Enter email..." />
                Password: <input required type="password" name="password" ref={password} placeholder="Enter password..." />
                <br/>
                <button onClick={handleClick}>Sign Up</button>
            </form>
        </div>
        )} 
    </div>
    );
}

export default SignInSignUp;

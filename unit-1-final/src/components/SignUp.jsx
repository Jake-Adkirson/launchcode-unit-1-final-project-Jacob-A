const SignUp = () => {
    return(
        <div className="SignUp">
            <h2>Sign Up</h2>
            <label>
                Name: <input type="text" name="email" />
                Email: <input type="text" name="email" />
                Password: <input type="text" name="password" />
                Confirm Password: <input type="text" name="conpass" />
            </label>
            <br/>
            <button>Sign Up</button>
        </div>
    );
}

export default SignUp;
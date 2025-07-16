const SignIn = () => {
    return(
        <div>
            <h2>Sign in</h2>
            <label>
                Email: <input type="text" name="email" />
                Password: <input type="text" name="password" />
            </label>
            <button>Sign in</button>
        </div>
    );
}

export default SignIn;
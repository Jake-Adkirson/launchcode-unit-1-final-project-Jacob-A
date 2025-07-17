import { Link } from 'react-router';

const SignIn = () => {
    return(
        <div className="SignIn">
            <h2>Sign In</h2>
            <label>
                Email: <input type="text" name="email" />
                Password: <input type="text" name="password" />
            </label>
            <br/>
            <button>Sign In</button>
            <br/>
            <p>Don't have an account? Sign up <Link to="/sign_up">here</Link></p>
        </div>
    );
}

export default SignIn;
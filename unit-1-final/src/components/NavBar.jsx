import { Link } from 'react-router';
import ReusableButton from './ReusableButton';

const NavBar = () => {
    return(
    <div className="NavBar">
        <ReusableButton style={{backgroundColor:"white"}}>
        <Link to="/welcome">Home</Link>
        </ReusableButton>
        <ReusableButton style={{backgroundColor:"white"}}>
            <Link to="/events_page">Events</Link>
        </ReusableButton>
        <ReusableButton style={{backgroundColor:"white"}}>
            <Link to="/profile">Profile</Link>
        </ReusableButton>
        <ReusableButton style={{backgroundColor:"white"}}>
            <Link to="/about">About</Link>
        </ReusableButton>
    </div>
    );
}

export default NavBar;
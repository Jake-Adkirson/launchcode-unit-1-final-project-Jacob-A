import { Link } from 'react-router';

const NavBar = () => {
    return(
    <div className="NavBar">
        <button>
            <Link to="/welcome">Home</Link>
        </button>
        <button>
            <Link to="/events_page">Events</Link>
        </button>
        <button>
            <Link to="/profile">Profile</Link>
        </button>
        <button>
            <Link to="/about">About</Link>
        </button>
    </div>
    );
}

export default NavBar;
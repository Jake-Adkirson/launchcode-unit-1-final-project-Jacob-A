import { Link } from 'react-router-dom';

//TODO make all Ps into links to associated page

const NavBar = () => {
    return(
    <div className="NavBar">
        <button>
            <Link to="/welcome">Home</Link>
        </button>
        <button>
            <Link to="/eventspage">Events</Link>
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
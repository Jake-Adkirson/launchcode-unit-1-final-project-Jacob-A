import { Link } from 'react-router';

//TODO make all Ps into links to associated page

const NavBar = () => {
    return(
    <div className="NavBar">
        <button>
            <p>Home</p>
        </button>
        <button>
            <p>Events</p>
        </button>
        <button>
            <p>Profile</p>
        </button>
        <button>
            <p>About</p>
        </button>
    </div>
    );
}

export default NavBar;
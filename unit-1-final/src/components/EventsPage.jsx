import { Link } from 'react-router';

const EventsPage = () => {
    
    return(
        <div>
            <button>
                <Link to="/events_page/create_event">Create Event</Link>
            </button>
            <button>
               <Link to="/events_page/join_event">Current Events</Link>
            </button>
        </div>
    );
}

export default EventsPage;
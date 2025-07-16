import { Link } from 'react-router';

const EventsPage = () => {
    
    return(
        <div>
            <button>
                <Link to="/events_page/create_event">Create Event</Link>
            </button>
            <button>Current Events</button>
        </div>
    );
}

export default EventsPage;
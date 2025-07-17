import { Link } from 'react-router';

const EventsPage = () => {
    
    return(
        <div className="EventsPage">
            <h2>Events</h2>
            <button>
                <Link to="/events_page/create_event">Create Event</Link>
            </button>
            <br/>
            <button>
               <Link to="/events_page/current_events">Current Events</Link>
            </button>
        </div>
    );
}

export default EventsPage;
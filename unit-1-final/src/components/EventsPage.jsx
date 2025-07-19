import { Link } from 'react-router';

const EventsPage = () => {
    
    return(
        <div className="EventsPage">
            <h2>Events</h2>
            <button>
                <Link to="/events_page/create_event">Create Event</Link>
            </button>
            <br/>
            <p>Event Name: <Link to="/trip_page">Super Float Event</Link> Organizer: Jake A. Event Date: 8/15/25 - 8/17/25 Event Location: Bass River Resort</p>
        </div>
    );
}

export default EventsPage;
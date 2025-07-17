import { Link } from 'react-router';

const CurrentEvents = () => {
    return(
        <div className="CurrentEvents">
            <h2>Current Events</h2>
            <br/>
            <p>Event Name: <Link to="/trip_page">Super Float Event</Link> Organizer: Jake A. Event Date: 8/15/25 - 8/17/25 Event Location: Bass River Resort</p>
        </div>
    );
}

export default CurrentEvents;
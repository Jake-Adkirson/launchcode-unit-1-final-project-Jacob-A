import { Link } from 'react-router';

const TripPage = () => {
    return(
        <div>
            <h2>Event Details</h2>
            <p>Event Name: Super Float Event Organizer: Jake A. Event Date: 8/15/25 - 8/17/25 Event Location: Bass River Resort</p>
            <h2>Attendees</h2>
            <button>
                <Link to="/join_event">Join Event</Link>
            </button>
            <p>Name: Jake A. Age: 13+yrs Watercraft: Kayak Floating and/or Camping: Floating and Camping</p>
            <p>Name: Brittany A. Age: 13+yrs Watercraft: Kayak Floating and/or Camping: Floating and Camping</p>
            <p>Name: Jon H. Age: 13+yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</p>
            <p>Name: Shawnna H. Age: 13+yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</p>
            <p>Name: Roman H. Age: 0 - 7yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</p>
            <p>Name: Kaleb S. Age: 13+yrs Watercraft: Kayak Floating and/or Camping: Floating and Camping</p>
            <p>Name: Carly A. Age: 13+yrs Watercraft: Raft Floating and/or Camping: Floating and Camping</p>
            <h2>Pricing</h2>
            <p>Name: Jake A. Camping: 35.98 Floating: 46 Total: 81.98</p>
            <p>Name: Brittany A. Camping: 35.98 Floating: 46 Total: 81.98</p>
            <p>Name: Jon H. Camping: 35.98 Floating: 55.2 Total: 91.18</p>
            <p>Name: Shawnna H. Camping: 35.98 Floating: 55.2 Total: 91.18</p>
            <p>Name: Roman H. Camping: 0 Floating: 0 Total: 0</p>
            <p>Name: Kaleb S. Camping: 35.98 Floating: 46 Total: 81.98</p>
            <p>Name: Carly A. Camping: 35.98 Floating: 55.2 Total: 91.18</p>
        </div>
    );
}

export default TripPage;
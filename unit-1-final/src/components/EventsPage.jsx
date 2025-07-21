import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const EventsPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/1XGZyeeLtsE3gUdgYZOBrXmymrHSWkzP9dFEiNwv5dBo/values/Sheet1!A2:D500?key=AIzaSyATPhbEPCa76G2XT63QCG0mpk4Q_BYYimI`);
                    setData(response.data.values);
                    setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    
    if(loading) {
        return <p>Loading events...</p>
    }

    if (error) {
        alert(error.message);
    }

    return(
        <div className="EventsPage">
            <h2>Events</h2>
            <button>
                <Link to="/events_page/create_event">Create Event</Link>
            </button>
            <div className="Data">
            {data.map((row, index) => (
                <div key={index}>
                    {row.map((cell, cellIndex) => (
                        <span key={cellIndex}>{cell} </span>
                    ))}
                    </div>
            ))}
            </div>
        </div>
    );
}

export default EventsPage;
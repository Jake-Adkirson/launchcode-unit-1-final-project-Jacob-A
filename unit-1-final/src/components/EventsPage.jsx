import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const EventsPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const rows = data.filter(row => row.length > 0);

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
        return <p className="EventsPage">Loading events...</p>
    }

    if (error) {
        alert(error.message);
    }
    console.log("Data shape:", data);
    return(
        <div className="EventsPage">
            <h2>Events</h2>
            <button>
                <Link to="/events_page/create_event">Create Event</Link>
            </button>
            <table className="Data" border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <th>Event Name</th>
                    <th>Organizer</th>
                    <th>Location</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                if (cellIndex === 0) {;
                                    return (
                                        <td key={cellIndex}>
                                            <Link to={'/trip_page'}>{cell}</Link>
                                        </td>
                                    );
                                } else {
                                    return <td key={cellIndex}>{cell}</td>
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EventsPage;
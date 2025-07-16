import { useState } from "react";

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        eventName:"",
        location:"",
        date:"",
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return(
        <div className="MakeEvntFrm">
            <form>
                <label>
                    Event Name: <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} />
                    Location: <input type="text" name="location" value={formData.location} onChange={handleChange} />
                    Date: <input type="text" name="date" value={formData.date} onChange={handleChange} />
                </label>
                <button>Submit</button>
                <button>Clear</button>
            </form>
        </div>
    );
}

export default CreateEvent;
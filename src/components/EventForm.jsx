import { useState } from 'react'
import ModalCloseBtn from './ModalCloseBtn';

function EventForm ({ show, onClose}) {
    const [formData, setFormData] = useState({
        category: "",
        name: "",
        description: "",
        location: "",
        date: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting new event:", formData);
        try {
            const response = await fetch("https://localhost:7035/api/events", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if(response.ok) {
            console.log("Event Created Succesfully");
            setFormData({
                category: "",
                name: "",
                description: "",
                location: "",
                date: ""
            });
            onClose();
        } else {
            console.error("Creating Event Failed")
        }
        } catch (error) {
            console.error("Event Submit Error:", error)
        }
    };

    if (!show) return null;

    return (
        <div className="modal-form-background">
                        <ModalCloseBtn onClose={onClose} />
        <div className="form-container">
            <div className="form-header">
                <h1>Create Event</h1>
            </div>
            <form className="form-box" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input className="form-input" type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
                </div>   
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div> 
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input className="form-input" type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
                </div>    
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input className="form-input" type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                </div>  
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input className="form-input" type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div> 
                <button className="btn-box form" type="submit">
                    <div className="btn-standard large">
                        Create Event
                    </div>
                </button>
            </form>
        </div>
    </div>
    )
}

export default EventForm
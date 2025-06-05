import React, { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventService";
import EventCard from "./EventCard";

export default function EventList() {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllEvents()
        .then(setEvents)
        .catch(console.error)
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading events...</p>

    return (
        <div className="event-list">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
}
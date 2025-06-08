import { useState } from 'react'
import EventForm from './EventForm'

function CreateEventBtn() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="main-create-btn">Create Event</button>
            <EventForm show={showModal} onClose={() => setShowModal(false)} />
        </div>
    )
}
export default CreateEventBtn
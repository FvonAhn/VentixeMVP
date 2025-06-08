import { useState } from 'react'
import EventForm from './EventForm'

function CreateEventBtn({onClick}) {

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="main-create-btn">Create Event</button>
            {showModal && (<EventForm onCancel={() => setShowModal(false)} />)};
        </div>
    )
}
export default CreateEventBtn
import { useState } from "react"
import EventList from "./EventList"
import MainHeader from "./MainHeader"
import EventForm from "./EventForm"

function Maincomp ({activeView}) {
    const renderContent = () => {
        if (activeView === "events") {
            return showCreateForm ? (
                <EventForm onCancel = {() => setShowCreateForm(false)} />
            ) : (
                <EventList onCreateClick={() => setShowCreateForm(true)} />
            );
        }

        return <p></p>
    };

    return (
        <section className="main">
            <MainHeader activeView={activeView} showCreateForm={showCreateForm} onCreateClick={() => setShowCreateForm(true)}/>
            {renderContent()}
        </section>
    )
}

export default Maincomp
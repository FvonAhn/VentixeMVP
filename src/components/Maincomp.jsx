import EventList from "./EventList"
import MainHeader from "./MainHeader"

function Maincomp ({activeView}) {
    const renderContent = () => {
        if (activeView === "events") {
            return <EventList />
        }
        return <p></p>
    };

    return (
        <section className="main">
            <MainHeader activeView={activeView} />
            {renderContent()}
        </section>
    )
}

export default Maincomp
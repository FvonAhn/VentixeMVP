import EventNav from "./EventNav"
import VentixeLogo from "./VentixeLogo"


function Sidebar ({ setActiveView, activeView }) {

    return (
        <section className="sidebar">
            <VentixeLogo />
            <EventNav setActiveView={setActiveView} activeView={activeView} />
        </section>
    )
}

export default Sidebar
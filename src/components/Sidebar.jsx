import EventNav from "./EventNav"
import VentixeLogo from "./VentixeLogo"


function Sidebar () {
    return (
        <section className="sidebar">
            <VentixeLogo />
            <EventNav />
        </section>
    )
}

export default Sidebar
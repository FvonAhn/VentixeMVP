function EventNav ({ setActiveView, activeView }) {

    const handleClick = () => {
        setActiveView(prev => (prev === "events" ? "none" : "events"));
    };

    return (
        <div className={`sidebar-navs ${activeView === "events" ? 'active' : ''}`}
        onClick={handleClick}
        >
            <div className="sidebar-navs-box">
                <div className="sidebar-navs-img">
                    <i className="fa-solid fa-ticket"></i>
                </div>
                <div className="sidebar-navs-name">
                    Events
                </div>
            </div>
        </div>
    )
}
export default EventNav
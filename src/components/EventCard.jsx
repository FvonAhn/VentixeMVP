import BarChart from '../images/BarChart.svg';

function EventCard () {
    return (
        <div className="event-card">
            <div className="event-img">
        
            </div>
            <div className="event-info">
                <div className="event-type">Event Type Here</div>
                <div className="event-name">Name of Event</div>
                <div className="event-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas doloribus totam repellendus quos excepturi possimus! Illum voluptatem assumenda qui. A quaerat optio ad quasi.</div> 
                <div className="event-where-time">
                    <div className="event-where">
                        <i className="fa-regular fa-map"></i>
                        <p>Stortorget, Örebro</p>
                    </div>
                    <div className="event-time">
                        <i className="fa-regular fa-calendar"></i>
                        <p>16 Juli, 2025 - 21:00</p>
                    </div>
                </div>
            </div>
            <div className="event-info-2">
                <div className="event-ticket-sold">
                    <img src={BarChart} alt="BarChart"></img>
                    <div className="percent-box">
                        <p className="percent">60%</p>
                        <p className="percent-text">Tickets Sold</p>
                    </div>
                </div>
                <div className="event-ticket-left">
                    <div className="event-ticket-left-img">
                        <i className="fa-solid fa-ticket fa-lg"></i>
                    </div>
                    <div className="event-ticket-left-box">
                        <div className="event-ticket-left-number">115</div>
                        <div className="event-ticket-left-text">Tickets Left</div>
                    </div>
                </div>
                <div className="event-ticket-price">
                    <p>$40</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard
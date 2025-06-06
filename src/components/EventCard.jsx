import BarChart from '../images/BarChart.svg';

function EventCard ({event}) {
    if(!event) return null;

    const dateTime = new Date(event.date);
    const date = dateTime.toLocaleDateString('sv-SE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const time = dateTime.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="event-card">
            <div className="event-img">
        
            </div>
            <div className="event-info">
                <div className="event-type">{event.category}</div>
                <div className="event-name">{event.name}</div>
                <div className="event-description">{event.description}</div> 
                <div className="event-where-time">
                    <div className="event-where">
                        <i className="fa-regular fa-map"></i>
                        <p>{event.location}</p>
                    </div>
                    <div className="event-time">
                        <i className="fa-regular fa-calendar"></i>
                        <p>{date} - {time}</p>
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
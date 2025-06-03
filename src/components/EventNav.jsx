import { useState } from 'react';

function EventNav () {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`sidebar-navs ${isActive ? 'active' : ''}`}
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
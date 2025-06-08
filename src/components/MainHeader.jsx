import CreateEventBtn from "./CreateEventBtn"

function MainHeader ({activeView}) {
    return (
        <div className="main-header">
            <div className="main-header-box">
                {activeView === "events" && <CreateEventBtn />}
            </div>
        </div>
    )
}

export default MainHeader
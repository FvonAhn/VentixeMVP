function Header ({ user }) {
    return (
        <section className="header">
            <div className="header-left">
                <div className="current-breadcrumb"></div>
            </div>
            <div className="header-right">
            Logged in as:
                <div className="current-user">{user.userName}</div>
            </div>
        </section>
    )    
}

export default Header
import Logo from '../images/VentixeLogo.svg';

function VentixeLogo () {
    return (
        <div className="sidebar-header">
            <div className="sidebar-header-logo">
                <img src={Logo} alt="VentixeLogo" />
            </div>
            <p>Ventixe</p>
        </div>
    )
}

export default VentixeLogo
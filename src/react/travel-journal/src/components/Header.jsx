import logo from '../assets/logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" className="logo"/>
            <span>My travel journal</span>
        </header>
    );
}

export default Header;
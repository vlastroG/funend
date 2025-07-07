import logo from '../assets/react.svg';

function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} alt="React logo"/>
                <span>ReactFacts</span>
            </nav>
        </header>
    );
}

export default Navbar;
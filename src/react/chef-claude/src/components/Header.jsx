import icon from "../assets/icon.png"

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={icon} alt="Icon"/>
                <span>Chef Claude</span>
            </div>
        </header>
    );
}
import marker from '../assets/marker.svg';
import entryImg from '../assets/japan.png';
import './entry.css'


function Entry() {
    return (
        <>
            <div className="entry">
                <div className="entry-img">
                    <img src={entryImg} alt="Mount Fuji, Japan"/>
                </div>
                <div className="entry-info">
                    <div className="location-header">
                        <img src={marker} alt="Marker on the map"/>
                        <h2 className="country">Japan</h2>
                        <a href="" target="_blank" className="googlemaps-link">View on Google Maps</a>
                    </div>
                    <h3 className="location-name">Mount Fuji</h3>
                    <span className="travel-dates">12 Jan, 2023 - 24 Jan, 2023</span>
                    <p className="travel-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776
                        meters
                        (12,380 feet). Mount Fuji is the
                        single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </>
    );
}

export default Entry;
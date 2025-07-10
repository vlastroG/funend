import marker from '../assets/marker.svg';
import './entry.css'


function Entry(props) {
    return (
        <article className="entry">
            <div className="entry-img-container">
                <img src={props.entryImg} alt={props.entryImgAlt}/>
            </div>
            <div className="entry-info">
                <div className="location-header">
                    <img src={marker} alt="Marker on the map"/>
                    <h2 className="country">{props.country}</h2>
                    <a href="" target="_blank" className="googlemaps-link">View on Google Maps</a>
                </div>
                <h3 className="location-name">{props.locationName}</h3>
                <span className="travel-dates">{props.dates}</span>
                <p className="travel-description">{props.locationDescription}</p></div>
        </article>
    );
}

export default Entry;
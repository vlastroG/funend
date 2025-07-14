import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import getData from "./services/dataProvider.js";

function App() {
    return (
        <>
            <Header/>
            {getData().map(item => (
                <Entry entryImg={item.entryImg}
                       entryImgAlt={item.entryImgAlt}
                       country={item.country}
                       locationName={item.locationName}
                       dates={item.dates}
                       locationDescription={item.locationDescription}/>
            ))}
        </>
    )
}


export default App;

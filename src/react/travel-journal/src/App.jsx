import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import fujiImg from "./assets/japan.png";
import sydneyImg from "./assets/sydney.png";
import norwayImg from "./assets/norway.png";

function App() {
    return (
        <>
            <Header/>
            <Entry entryImg={fujiImg}
                   entryImgAlt="Mount Fuji"
                   country="Japan"
                   locationName="Mount Fuji"
                   dates="12 Jan, 2023 - 24 Jan, 2023"
                   locationDescription="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
            <Entry entryImg={sydneyImg}
                   entryImgAlt="Sydney Opera House"
                   country="Australia"
                   locationName="Sydney Opera House"
                   dates="27 May, 2023 - 8 Jun, 2023"
                   locationDescription="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."/>
            <Entry entryImg={norwayImg}
                   entryImgAlt="Geirangerfjord"
                   country="Norway"
                   locationName="Geirangerfjord"
                   dates="01 Oct, 2024 - 18 Nov, 2024"
                   locationDescription="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."/>
        </>
    )
}


export default App;

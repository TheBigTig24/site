import { forwardRef, useEffect, useState } from 'react';
import '../styles/travel.css';
import { APIProvider, Map as MapComponent, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

interface Coordinates {
    lat: number;
    lng: number,
}

const Travel = forwardRef<HTMLDivElement>((props, ref) => {
    const [defaultPos, setDefaultPos] = useState<Coordinates>();

    const [mapLocations, setMapLocations] = useState<Map<string, Coordinates>>(new Map());
    const locations = [
        '32 City Garden Rd, North Point, Hong Kong',
        '20 W 34th St., New York, NY',
        '400 Broad St, Seattle, WA',
    ];

    useEffect(() => {
        locations.forEach((loc) => {
            let baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="
            let mainUrl = loc.replaceAll(" ", "+");
            let suffixUrl = "&key=" + import.meta.env.VITE_GMAPS_API_KEY;
            fetch(baseUrl + mainUrl + suffixUrl)
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    const data = res.results[0].geometry.location;
                    if (data) {
                        let coords: Coordinates = {
                            lat: data.lat,
                            lng: data.lng,
                        };
                        setMapLocations(prevMap => {
                            const newMap = new Map(prevMap);
                            newMap.set(loc, coords);
                            return newMap;
                        });
                    }
                })
                .catch((error) => {
                    console.error("ur mom", error);
                });
        });
    }, []);

    useEffect(() => {
        let averageLat: number = 0;
        let averageLng: number = 0;
        Array.from(mapLocations.values()).forEach((val: Coordinates) => {
            averageLat +=val.lat;
            averageLng += val.lng;
        });
        let size: number = mapLocations.size;
        const coords: Coordinates = { lat: averageLat / size, lng: averageLng / size };
        setDefaultPos(coords);
    }, [mapLocations]);

    return (<>
        <div ref={ref} id='travel'>
            <p>TRAVEL</p>
            <APIProvider apiKey={import.meta.env.VITE_GMAPS_API_KEY}>
                <div id='gmap'>
                    <MapComponent 
                        defaultCenter={{ lat: defaultPos?.lat, lng: defaultPos?.lng }}
                        defaultZoom={3}
                        mapId={import.meta.env.VITE_GMAPS_MAP_ID}
                        >
                        {Array.from(mapLocations.entries()).map( ([location, coords], index) => (
                            <AdvancedMarker key={index} position={{lat: coords.lat, lng: coords.lng }}></AdvancedMarker>
                        ))}
                    </MapComponent>
                </div>
            </APIProvider>
        </div>
    </>);
});

export default Travel;
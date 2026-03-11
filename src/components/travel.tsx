import { forwardRef, useEffect, useMemo, useState } from 'react';
import '../styles/travel.css';
import { APIProvider, Map as MapComponent, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

interface Coordinates {
    lat: number;
    lng: number,
}

interface LegendColor {
    bgColor: string;
    bdColor: string;
    definition: string;
}

const Travel = forwardRef<HTMLDivElement>((props, ref) => {
    const [defaultPos, setDefaultPos] = useState<Coordinates>();

    const [mapLocations, setMapLocations] = useState<Map<string, Coordinates>>(new Map());
    const [locations, setLocations] = useState<string[]>([
        '1 Lugard Road, Victoria Peak, HK',
        '20 W 34th St., New York, NY',
        '400 Broad St, Seattle, WA',
        'Haizhu Square, Guangzhou, China',
        'Tokyo Skytree',
        'Disneyworld, FL',
        'Ba Na Hills, VN',
        'Taipei 101, TW',
        '18 Marina Gardens Dr, Singapore',
        'Ho Chi Minh City',
        'Sun Moon Lake, TW',
        'Hualien, TW',
        'Kyoto, JP',
        'Osaka, JP',
        '3735 Capilano Road, North Vancouver, British Columbia, CN',
        'Niagara Falls',
        'Cancun, MX',
        'Tijuana, MX',
        'San Diego, CA'
    ]);

    const [wantedLocations, setWantedLocations] = useState<Map<string, Coordinates>>(new Map());
    const [wanted, setWanted] = useState<string[]>([
        'Shanghai, CN'
    ]);

    const [legendColors, setLegendColors] = useState<LegendColor[]>([
        {
            bgColor: 'red', bdColor: 'darkred', definition: 'Visited'
        },
        {
            bgColor: 'blue', bdColor: 'darkblue', definition: 'Want to Visit'
        }
    ])

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

        wanted.forEach((elem) => {
            let baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
            let mainUrl = elem.replaceAll(" ", "+");
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
                        setWantedLocations(prevMap => {
                            const newMap = new Map(prevMap);
                            newMap.set(elem, coords);
                            return newMap;
                        });
                    }
                })
                .catch((error) => {
                    console.error("ur mom", error);
                });
        });
    }, []);

    const memoizedDefCenter = useMemo(() => {
        if (!mapLocations || mapLocations.size === 0) return { lat: 0, lng: 0 };
        let averageLat: number = 0;
        let averageLng: number = 0;
        Array.from(mapLocations.values()).forEach((val: Coordinates) => {
            averageLat += val.lat;
            averageLng += val.lng;
        })
        let size: number = mapLocations.size;
        const coords: Coordinates = { lat: averageLat / size, lng: averageLng / size };
        return coords;
    }, [mapLocations])

    return (<>
        <div ref={ref} id='travel'>
            <p id='title'>TRAVEL</p>
            <p>I enjoy traveling with my loved ones, so take a look at some of the places that I've visited before!</p>
            <div id='map-container'>
                <APIProvider apiKey={import.meta.env.VITE_GMAPS_API_KEY}>
                    <div id='gmap'>
                        <MapComponent 
                            defaultCenter={memoizedDefCenter}
                            defaultZoom={3}
                            mapId={import.meta.env.VITE_GMAPS_MAP_ID}
                            >
                            {Array.from(mapLocations.entries()).map( ([location, coords], index) => (
                                <AdvancedMarker key={index} position={{lat: coords.lat, lng: coords.lng }}></AdvancedMarker>
                            ))}
                            {Array.from(wantedLocations.entries()).map( ([location, coords], index) => (
                                <AdvancedMarker key={index} position={{lat: coords.lat, lng: coords.lng }}>
                                    <Pin background={'blue'} glyphColor={'darkblue'} borderColor={'blue'}/>
                                </AdvancedMarker>
                            ))}
                        </MapComponent>
                    </div>
                </APIProvider>
                <div id='legend'>
                    <h3>Key</h3>
                    <div>
                    {legendColors.map((el, index) => (
                        <div key={index} className='legend-item'>
                            <button style={{backgroundColor: el.bgColor, borderColor: el.bdColor}}></button>
                            <p>{el.definition}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </>);
});

export default Travel;
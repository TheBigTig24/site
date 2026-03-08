import { forwardRef } from 'react';
import '../styles/travel.css';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const Travel = forwardRef<HTMLDivElement>((props, ref) => {
    const defaultPos = { lat: 69.6767, lng: -69.6767 };


    return (<>
        <div ref={ref} id='travel'>
            <APIProvider apiKey={import.meta.env.VITE_GMAPS_API_KEY}>
                <div id='gmap'>
                    <Map center={defaultPos} zoom={10}>
                        <Marker position={defaultPos} />
                    </Map>
                </div>
            </APIProvider>
        </div>
    </>);
});

export default Travel;
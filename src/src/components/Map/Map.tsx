import { FC, useEffect, useState } from 'react';

import { GoogleMap, useJsApiLoader, MarkerClusterer, Polygon } from '@react-google-maps/api';

import { tCoord, tHouseSmall } from 'src/types';
import { coordsBergen } from 'src/mockData/coord';

import './Map.scss';
import { VIOLET } from 'src/constants';

import { MarkerOnMap } from './Marker';

interface IProps {
    municipality?: string;
    defaultZoom?: number;
    defaultCenter?: tCoord;
    items: tHouseSmall[] | [];
    activePin: number;
    clickable?: boolean;
}
export const Map: FC<IProps> = ({
    municipality,
    defaultZoom = 11,
    defaultCenter,
    items,
    activePin,
    clickable,
}) => {
    const [map, setMap] = useState<any>(null);
    const [zoom, setZoom] = useState<number>(defaultZoom);
    const [center, setCenter] = useState<tCoord>({ lat: 40.944542, lng: -74.075417 });
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAP_KEY || '',
    });
    const containerStyle = {
        width: '100%',
        height: '100%',
    };
    const changeZoom = () => {
        setZoom(map != null ? +map.zoom : defaultZoom);
    };
    useEffect(() => {
        if (defaultCenter) {
            setCenter(defaultCenter);
        } else setCenter({ lat: 40.944542, lng: -74.075417 });
    }, [defaultCenter]);
    return (
        <div className="map">
            {isLoaded && (
                <GoogleMap
                    onLoad={map => {
                        setMap(map);
                    }}
                    mapContainerStyle={containerStyle}
                    zoom={zoom}
                    center={center}
                    onZoomChanged={() => changeZoom()}
                >
                    <Polygon
                        key={'poly'}
                        path={coordsBergen}
                        options={{
                            strokeColor: VIOLET,
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: VIOLET,
                            fillOpacity: 0.1,
                        }}
                    />

                    {zoom < 17 ? (
                        <MarkerClusterer key={'cluster'}>
                            {clusterer =>
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                items.map(item => (
                                    <MarkerOnMap
                                        municipality={municipality}
                                        item={item}
                                        key={item.MUNICIPALITY_CODE}
                                        // position={{ lat: +item.lat, lng: +item.lng }}
                                        clusterer={clusterer}
                                        activePin={activePin}
                                        clickable={clickable}
                                        position={{
                                            lat: 0,
                                            lng: 0,
                                        }}
                                    />
                                ))
                            }
                        </MarkerClusterer>
                    ) : (
                        <>
                            {items.map(item => (
                                <MarkerOnMap
                                    municipality={municipality}
                                    item={item}
                                    key={item.MUNICIPALITY_CODE}
                                    // position={{ lat: +item.lat, lng: +item.lng }}
                                    position={{
                                        lat: 0,
                                        lng: 0,
                                    }}
                                    activePin={activePin}
                                    clickable={clickable}
                                />
                            ))}
                        </>
                    )}
                </GoogleMap>
            )}
        </div>
    );
};

import React, { Component, PropTypes } from 'react'
import GMap from './google/gmap';

const Map = ({ points,
            center,
            zoom,
            setZoom,
            setCenter,
            addPoint,
            removePoint }) => {

    const createMarkers = (points) => {
        let list = points || [];
        return list.map((m) => {
            return new google.maps.Marker({
                position: new google.maps.LatLng(m.x, m.y),
                title: 'Hello World!'
            });
        });
    }

    return (
        <GMap

            zoom={zoom}
            center={center}
            markers={createMarkers(points)}
            onMapClick={({ latLng }) => {
                let x = latLng.lat();
                let y = latLng.lng();
                addPoint(x,y);
            }}
            onMarkerRightclick={removePoint}
            onCenterChanged={setCenter}
            onZoomChanged={setZoom}
            />
    );
}

Map.displayName = 'Map';

export default Map;
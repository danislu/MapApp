import React, { Component, PropTypes } from 'react'
import GMap from './google/gmap';

export default class MapView extends React.Component {
    constructor(props){
        super(props);
        
        this.createMarkers = this.createMarkers.bind(this);
    }

    createMarkers(points){
        let list = points || [];
        return list.map((m) => {
            return new google.maps.Marker({
                position: new google.maps.LatLng(m.x, m.y),
                title: 'Hello World!'
            });
        });
    }
    
    render() {
        let { points, 
            center, 
            zoom, 
            setZoom,
            setCenter,
            addPoint,
            removePoint } = this.props;
    
        return (
            <GMap
                zoom={zoom}
                center={center}
                markers={this.createMarkers(points)}
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
}

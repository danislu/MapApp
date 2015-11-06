import React from 'react';
import GMap from './google/gmap';
import LMap from './leaflet/lmap'; 

import Store from './../store';
import { setCenter, setRandomCenter, removePoint, addPoint, addRandomPoint, setSidebarOpen, setZoom } from './../actions';

export default class MainView extends React.Component {
    constructor(props){
        super(props);
        
        this.removeClicked = this.removeClicked.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.createMarkers = this.createMarkers.bind(this);
        this.centerChanged = this.centerChanged.bind(this);
        this.handleZoomChanged = this.handleZoomChanged.bind(this);
        
        Store.subscribe(()=>{
            this.setState(Store.getState());
        });
        
        this.state = Store.getState();
    }
    
    handleZoomChanged(zoom){
        Store.dispatch(setZoom(zoom));
    }
    
    removeClicked(index){
        Store.dispatch(removePoint(index));
    }
    
    handleMapClick({ latLng }){
        let x = latLng.lat();
        let y = latLng.lng();
        Store.dispatch(addPoint(x,y));
    }
    
    centerChanged(x,y){
        Store.dispatch(setCenter(x,y));
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
        let { points, center, zoom } = this.state;
    
        return (
        <div className="container">
            <GMap
                markers={this.createMarkers(points)}
                onMapClick={this.handleMapClick}
                onMarkerRightclick={this.removeClicked}
                onCenterChanged={this.centerChanged}
                onZoomChanged={this.handleZoomChanged}
                zoom={zoom}
                center={center}
                />
        </div>
        );
    }
}
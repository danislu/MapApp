import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import GMap from './google/gmap';
import Store from './../store';
import * as actions from './../actions';

class MapView extends React.Component {
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
        <div className="container">
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
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        points: state.points, 
        center: state.center,
        zoom: state.zoom
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setZoom: (zoom) => dispatch(actions.setZoom(zoom)),
        setCenter: (x,y) => dispatch(actions.setCenter(x,y)),
        addPoint: (x,y) => dispatch(actions.addPoint(x,y)),
        removePoint: (index) => dispatch(actions.removePoint(index))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapView)
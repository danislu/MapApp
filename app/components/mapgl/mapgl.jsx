import React from 'react';
//import autobind from 'autobind-decorator';

import { MapGL } from 'react-map-gl';

export default class DslMap extends React.Component {
    constructor(props){
        super(props);
        
        this.viewportChanged = this.viewportChanged.bind(this);
    }
    
    //@autobind
    viewportChanged({latitude, longitude, zoom}){
        this.props.onCenterChanged(latitude, longitude);
        this.props.onZoomChanged(zoom);
    }

    render() {
        const { onMapClick, center, onMarkerRightclick, markers, zoom } = this.props;
        
        return (
            <MapGL 
                width={400} 
                height={400} 
                latitude={center.x} 
                longitude={center.y}
                zoom={zoom} 
                onChangeViewport={this.viewportChanged}> 
                DslMap
            </MapGL>
        );
        
    }
}
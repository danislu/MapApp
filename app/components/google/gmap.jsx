import React from 'react';
import { GoogleMap, Marker, SearchBox } from "react-google-maps";

// Marker props;
// animation, attribution, clickable, cursor, draggable, icon, label, opacity, options, place, position, shape, title, visible, zIndex

export default class GMap extends React.Component {

    constructor(props){
        super(props);

        this.handleCenterChanged = this.handleCenterChanged.bind(this);
        this.handleZoomChanged = this.handleZoomChanged.bind(this);

        this.map = null;
    }

    handleCenterChanged() {
        let mapCenter = this.map.getCenter();
        this.props.onCenterChanged(mapCenter.lat(), mapCenter.lng());
    }

    handleZoomChanged(){
        let zoom = this.map.getZoom();
        this.props.onZoomChanged(zoom);
    }

    render() {
        let { onMapClick, center, onMarkerRightclick, markers, zoom } = this.props;

        return (
            <GoogleMap 
                containerProps={
                    {
                        style: {
                            position: "absolute", 
                            top: "50px",
                            bottom: "50px", 
                            left: "0",
                            right: "0",
                        },
                    }
                }

                zoom={zoom}
                onZoomChanged={this.handleZoomChanged}

                center={{lat: center.x, lng: center.y}}
                onClick={onMapClick}
                onCenterChanged={this.handleCenterChanged}
                ref={(ref) => this.map = ref}>
                {markers.map((marker, index) => {
                    return (
                        <Marker
                            key={marker.toString()+index}
                        {...marker}
                        onRightclick={() => onMarkerRightclick(index)} />
                    );
                })}
            </GoogleMap>
        );
    }
}
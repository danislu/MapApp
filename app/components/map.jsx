import React from 'react';
import { GoogleMap, Marker, SearchBox } from "react-google-maps";

export default class Map extends React.Component {

    constructor(props){
        super(props);
        this.map = null;
    }
    
    render() {
        return (
            <GoogleMap 
                containerProps={
                    {
                        style: {
                            height: "100%",
                            top: "10%",
                            bottom: "10%"
                        },
                    }
                }
                defaultZoom={3}
                defaultCenter={{lat: -25.363882, lng: 131.044922}}
                onClick={this.props.onMapClick}
                onCenterChanged={()=>{
                    let mapCenter = this.map.center;
                    this.props.centerChanged(mapCenter.lat(), mapCenter.lng());
                }}
                ref={(ref) => this.map = ref}>
                {this.props.markers.map((marker, index) => {
                    return (
                        <Marker
                            key={marker.toString()+index}
                        {...marker}
                        onRightclick={() => this.props.onMarkerRightclick(index)} />
                    );
                })}
            </GoogleMap>
        );
    }
}
import React from 'react';
import { GoogleMap, Marker, SearchBox } from "react-google-maps";

export default class Map extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <GoogleMap 
                containerProps={
                    {
                        style: {
                            height: "100%",
                        },
                    }
                }
                defaultZoom={3}
                defaultCenter={{lat: -25.363882, lng: 131.044922}}
                onClick={this.props.onMapClick}>
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
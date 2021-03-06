import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [51.505, -0.09];
export default class LMap extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Map center={position} zoom={10}>
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}


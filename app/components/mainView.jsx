import React from 'react';
import Map from './map';

export default class MainView extends React.Component {
    constructor(props){
        super(props);
        
        this.removeClicked = this.removeClicked.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
        this.createMarkers = this.createMarkers.bind(this);
    }
    
    removeClicked(index){
        this.props.removePoint(index);
    }
    
    handleMapClick({ latLng }){
        console.log(latLng.toString());
        this.props.addPoint(latLng.lat(), latLng.lng());
    }
    
    handleMarkerRightClick(index){
        this.props.removePoint(index);
    }
    
    createMarkers(points){
        let list = points || [];
        return list.map((m) => {
            return new google.maps.Marker({
                position: new google.maps.LatLng(m.x, m.y),
                //map: map,
                title: 'Hello World!'
            });
        });
    }
    
    render() {
        return (
            <div>
                <Map 
                    onMapClick={this.handleMapClick}
                    onMarkerRightclick={this.handleMarkerRightClick}
                    markers={this.createMarkers(this.props.points)}
                    />
                <button onClick={() => this.props.addRandomPoint()}>add</button>
                <ul>
                    {this.props.points.map((p, i) => {
                        return (
                            <li key={ p.x + '-' + p.y + '-' + i  }>
                                <p>x: {p.x} y: {p.y}</p>
                                <button onClick={() => this.removeClicked(i)}>remove</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

//MainView.propTypes = { points: React.PropTypes.isRequired };
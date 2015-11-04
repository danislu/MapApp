import React from 'react';
import Map from './map';

import Store from './../store';
import { setCenter, setRandomCenter, removePoint, addPoint, addRandomPoint, setSidebarOpen } from './../actions';

export default class MainView extends React.Component {
    constructor(props){
        super(props);
        
        this.removeClicked = this.removeClicked.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.createMarkers = this.createMarkers.bind(this);
        this.centerChanged = this.centerChanged.bind(this);
        
        Store.subscribe(()=>{
            this.setState(Store.getState());
        });
        
        this.state = Store.getState();
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
        return (
        <div className="container">
            <Map
                onMapClick={this.handleMapClick}
                markers={this.createMarkers(this.state.points)}
                centerChanged={this.centerChanged}
                />
        </div>
        );
    }
}

/*
<button onClick={() => this.props.addRandomPoint()}>add</button>
                <ul>
                    {this.state.points.map((p, i) => {
                        return (
                            <li key={ p.x + '-' + p.y + '-' + i  }>
                                <p>x: {p.x} y: {p.y}</p>
                                <button onClick={() => this.removeClicked(i)}>remove</button>
                            </li>
                        );
                    })}
                </ul>
*/
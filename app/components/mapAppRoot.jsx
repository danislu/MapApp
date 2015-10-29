import React from 'react';
import Sidebar from 'react-sidebar';

import Footer from './footer';
import MainView from './mainView';
import Store from './../store';
import { setRandomCenter, removePoint, addPoint, addRandomPoint } from './../actions';
import SidebarContent from './sidebarContent';

export class MapAppRoot extends React.Component {

    constructor(props){
        super(props);
        
        this.headerClicked = this.headerClicked.bind(this);
        this.changedHandler = this.changedHandler.bind(this);
        this.handleAddPoint = this.handleAddPoint.bind(this);
        this.handleRemovePoint = this.handleRemovePoint.bind(this);
        
        Store.subscribe(()=>{
            this.setState(Store.getState());
        });
        
        this.state = Store.getState();
    }

    changedHandler() {
        this.setState(Store.getState());
    }

    handleAddPoint(x,y){
        Store.dispatch(addPoint(x,y));
    }
    
    handleRemovePoint(index){
        Store.dispatch(removePoint(index));
    }
    
    headerClicked(e) {
        Store.dispatch(setRandomCenter());
    }
    
    get isSidebarOpen() {
        return this.state.points.length > 0;
    }
    
    render() {
        let content = (
            <SidebarContent 
                points={this.state.points}
                removePoint={this.handleRemovePoint}>
            </SidebarContent>
        );

        return (<div>
            <Sidebar
                sidebar={content}
                open={this.isSidebarOpen}
                onActionClick={this.headerClicked}>
                <MainView
                    center={this.state.center}
                    points={this.state.points}
                    addPoint={this.handleAddPoint}
                    removePoint={this.handleRemovePoint}>
                    markers={this.state.points}
                </MainView>
            </Sidebar>
        </div>);
    }
    
}

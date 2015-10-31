import React from 'react';
import Sidebar from 'react-sidebar';

import MainView from './mainView';
import Navbar from './navbar';
import SidebarContent from './sidebarContent';

import Store from './../store';
import { setCenter, setRandomCenter, removePoint, addPoint, addRandomPoint, setSidebarOpen } from './../actions';

export default class MapAppRoot extends React.Component {

    constructor(props){
        super(props);
        
        this.handleRemovePoint = this.handleRemovePoint.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.onToggleSidebar = this.onToggleSidebar.bind(this);
        
        Store.subscribe(()=>{
            this.setState(Store.getState());
        });
        
        this.state = Store.getState();
    }

    handleRemovePoint(index){
        Store.dispatch(removePoint(index));
    }
    
    onSetSidebarOpen(open) {
        Store.dispatch(setSidebarOpen(open));
    }
    
    onToggleSidebar(){
        let open = this.state.ui.sidebar.open;
        Store.dispatch(setSidebarOpen(!open));
    }
    
    render() {
        const { children } = this.props;
        const { points, ui } = this.state;
        let content = (
            <SidebarContent 
                points={points}
                removePoint={this.handleRemovePoint}>
            </SidebarContent>
        );

        return (<div>
            <Sidebar
                sidebar={content}
                open={ui.sidebar.open}
                onSetOpen={this.onSetSidebarOpen}>
                <section>
                    <Navbar onOpenMenuClick={this.onToggleSidebar} />
                    {children}
                </section>
            </Sidebar>
        </div>);
    }
}

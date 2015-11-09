import React from 'react';
import Sidebar from 'react-sidebar';

import MapAppNavbar from './mapAppNavbar';
import Footer from './footer';
import SidebarContent from './sidebarContent';

export default class MapAppRoot extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { children, points, ui, onSetSidebarOpen, removePoint } = this.props;
        
        let content = (
            <SidebarContent 
                points={points}
                removePoint={removePoint}>
            </SidebarContent>
        );

        return (
            <Sidebar sidebar={content} open={ui.sidebar.open} onSetOpen={onSetSidebarOpen}>
                <MapAppNavbar onOpenMenuClick={()=>{
                    let open = ui.sidebar.open;
                    onSetSidebarOpen(open);
                }} />
                {children}
                <Footer />
            </Sidebar>
        );
    }
}
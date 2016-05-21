import React from 'react';
import Sidebar from 'react-sidebar';

import Navbar from './navbar';
import Footer from './footer';
import SidebarContent from './sidebarContent';

export default class App extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { children, points, ui, onSetSidebarOpen, removePoint } = this.props;

        return (
            <div>
                <Navbar onOpenMenuClick={()=>{
                    let open = ui.sidebar.open;
                    onSetSidebarOpen(open);
                }} {...this.props} />
            <div style={{ marginTop: '75px' }}>{children}</div>
                <Footer />
            </div>
        );
    }
}

/*
let content = (
    <SidebarContent
        points={points}
        removePoint={removePoint}>
    </SidebarContent>
);
*/
//<Sidebar sidebar={content} open={ui.sidebar.open} onSetOpen={onSetSidebarOpen}>
//</Sidebar>

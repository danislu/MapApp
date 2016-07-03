import React from 'react';
import Sidebar from 'react-sidebar';

import MyNavbar from '../MyNavbar';
import Footer from '../Footer';

const App = (props) => {
    const { children, points, ui, onSetSidebarOpen, removePoint } = props;
    
    return (
        <div>
            <MyNavbar onOpenMenuClick={()=>{
                let open = ui.sidebar.open;
                onSetSidebarOpen(open);
            }} {...props} />
        <div style={{ marginTop: '75px' }}>{children}</div>
            <Footer />
        </div>
    );
}

App.displayName = 'App';

export default App;

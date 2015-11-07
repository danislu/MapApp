import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem, CollapsibleNav } from 'react-bootstrap';


export default class MapAppNavbar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <Navbar fixedTop inverse toggleNavKey={0}>
                <NavBrand><a href="#">React-MapApp</a></NavBrand>
                <CollapsibleNav eventKey={0}>
                    <Nav navbar>
                        <NavItem eventKey={1} href="#/">Home</NavItem>
                        <NavItem eventKey={2} href="#/map">Map</NavItem>
                        <NavItem eventKey={3} href="#/about">About</NavItem>
                    </Nav>
                </CollapsibleNav>
            </Navbar>
        );
    }
}

//<Link to="/">Home</Link>
//<Link to="/about">About</Link>
import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavDropdown, MenuItem, CollapsibleNav } from 'react-bootstrap';

export default class MapAppNavbar extends React.Component {
    constructor(props){
        super(props);
        
        this.isActive = this.isActive.bind(this);
    }
    
    isActive(part){
        var hash = window.location.hash || "";
        return hash.includes(part);
    }
    
    render() {
        return (
            <Navbar fixedTop inverse>
                <NavbarBrand><a href="#">React-MapApp</a></NavbarBrand>
                <Navbar.Collapse eventKey={0}>
                    <Nav pullRight navbar>
                        <NavItem eventKey={1} active={this.isActive("home")} href="#/home">Home</NavItem>
                        <NavItem eventKey={2} active={this.isActive("map")} href="#/map">Map</NavItem>
                        <NavItem eventKey={3} active={this.isActive("about")} href="#/about">About</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
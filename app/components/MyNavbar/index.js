import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const MyNavbar = ({ path, navigateTo }) => {

    const isActive = (part) => {
        return path.endsWith(part);
    };
    
    return (
        <Navbar fixedTop inverse>
            <Navbar.Header>
                <Navbar.Brand><a href="#">React-Bootstrap</a></Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={0} 
                    active={isActive("/")}
                    onClick={() => navigateTo('/')}>Home</NavItem>
                <NavItem eventKey={1}
                    active={isActive("cal")}
                    onClick={() => navigateTo('/cal')}>Calendar</NavItem>
                <NavItem eventKey={2}
                active={isActive("map")}
                    onClick={() => navigateTo('/map')}>Map</NavItem>
                <NavItem eventKey={3}
                    active={isActive("about")}
                    onClick={() => navigateTo('/about')}>About</NavItem>
                
                <NavDropdown eventKey={4} title="Me" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>Github</MenuItem>
                <MenuItem eventKey={4.2}>LinkedIn</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.3}>About</MenuItem>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

MyNavbar.displayName = 'MyNavbar';

export default MyNavbar;


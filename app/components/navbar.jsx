import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavDropdown, MenuItem, CollapsibleNav } from 'react-bootstrap';

export default class MyNavbar extends React.Component {
    constructor(props){
        super(props);

        this.isActive = this.isActive.bind(this);
    }

    isActive(part){
        const { path } = this.props;
        return path.endsWith(part);
    }

    render() {
        const { navigateTo } = this.props;

        return (
            <Navbar fixedTop inverse>
                <NavbarBrand><a href="#">React-MapApp</a></NavbarBrand>
                <Navbar.Collapse eventKey={0}>
                    <Nav pullRight navbar>
                        <NavItem eventKey={1}
                            active={this.isActive("/")}
                            onClick={() => navigateTo('/')}>Home</NavItem>
                        <NavItem eventKey={2}
                            active={this.isActive("map")}
                            onClick={() => navigateTo('/map')}>Map</NavItem>
                        <NavItem eventKey={3}
                            active={this.isActive("about")}
                            onClick={() => navigateTo('/about')}>About</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

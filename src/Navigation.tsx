import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
//import ReactDOM from 'react-dom';

interface NavbarProps {
    title: string;
    active: string;
}

class Navigation extends Component<NavbarProps> {
    getNavLink(name: string, link: string) {
        return <LinkContainer to={link}><Nav.Link>{name}</Nav.Link></LinkContainer>;
    };
    render() {
        const { title } = this.props;
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className="navLogo">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navLinks" aria-current='page'>
                    {this.getNavLink("Home", "/")} <Nav.Link>/</Nav.Link>
                    {this.getNavLink("About", "/About")}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default Navigation;
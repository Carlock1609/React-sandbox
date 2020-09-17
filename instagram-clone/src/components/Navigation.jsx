import React from 'react';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar className="Navigation" expand="lg">
                <Navbar.Brand className="mx-auto" href="#home">Instagram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="nav-search-container mx-auto">
                        <FormControl type="text" placeholder="Search" className="nav-search-input" />
                    </Form>
                    <Nav className="nav-icon-container ml-auto">
                        <Nav.Link href="#home"><i className="nav-icon fas fa-house-user"></i></Nav.Link>
                        <Nav.Link href="#link"><i className="nav-icon far fa-paper-plane"></i></Nav.Link>
                        <Nav.Link href="#link"><i className="nav-icon far fa-compass"></i></Nav.Link>
                        <Nav.Link href="#link"><i className="nav-icon far fa-heart"></i></Nav.Link>
                        <Nav.Link href="#link"><i className="nav-icon far fa-user-circle"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
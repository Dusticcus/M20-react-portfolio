import React from "react";
import './navbar.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Dustin Safady</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
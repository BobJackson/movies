import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function WebsiteNav() {
    return (<Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#action">Action</Nav.Link>
                    <Nav.Link href="#drama">Drama</Nav.Link>
                    <Nav.Link href="#comedy">Comedy</Nav.Link>
                    <Nav.Link href="#adventure">Adventure</Nav.Link>
                    <Nav.Link href="#biography">Biography</Nav.Link>
                    <Nav.Link href="#crime">Crime</Nav.Link>
                    <Nav.Link href="#animation">Animation</Nav.Link>
                    <NavDropdown title="Series" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Marvel</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            DC
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default WebsiteNav;
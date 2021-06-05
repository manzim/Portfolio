import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import Logo from "../../assets/icons/brandicon.png";

import './mynavbar.css'

export function MyNavbar() {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt="my brand logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#experiences">Experiences</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <NavDropdown  title="Others" id="nav-dropdown" aria-controls="responsive-navbar-nav" >
                            <NavDropdown.Item target="_blank" href="https://gaming.uefa.com/en/uefaeuro2020fantasyfootball/" >Fantasy Premier League</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item target="_blank" href="" >Coding Stories</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item target="_blank" href="" >Promotional Contents</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {/* <NavDropdown.Item >Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
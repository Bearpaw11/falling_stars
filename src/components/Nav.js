import React from 'react'
import {Navbar, Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import logo from '../images/Logo.jpg'

function Navmenu() {
    return (
        <div>
        <h2 className="title">FALLING STARS</h2>
        <h6 className="title2">DESIGN</h6>
        <img className="Logo" src={logo}></img>
        <Navbar className="navborder" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar">
            <Nav.Link className="link"href="/">HOME </Nav.Link>
            <Nav.Link className="link"href="/about">ABOUT</Nav.Link>
            <Nav.Link className="link"href="/projects">PROJECTS</Nav.Link>
            <Nav.Link className="link"href="/contact">CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Navmenu
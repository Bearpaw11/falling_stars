import React from 'react'
import {Navbar, Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import logo from '../images/Logo.jpg'

function Navmenu() {
    return (
        <div>
        <h1 className="title">Falling Stars</h1>
        <h4 className="title2">Design</h4>
        <img className="Logo" src={logo}></img>
        <Navbar className="navborder" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar">
            <Nav.Link href="/">Home </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Navmenu
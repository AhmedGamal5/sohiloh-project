import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom';
 



function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
      <Container fluid>      
        <NavLink to="/"><img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" className='logo' alt="logo" /></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">            
          </Nav>
          <Nav>           
            <HashLink className='hashlinks' to="/#Latest Builds">Latest Builds </HashLink>
            <HashLink className='hashlinks' to="/#Process">Process</HashLink>
            <HashLink className='hashlinks' to="/#Services">Services</HashLink>
            <HashLink className='hashlinks' to="/#Contact us">Contact us</HashLink>
            <HashLink className='hashlinks' to="/#Projects">Projects</HashLink>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
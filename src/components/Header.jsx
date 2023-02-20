import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (

    // <Navbar expand="lg" className='header '>
    //   <Container >
    //     <img src="https://htmldemo.net/strane/strane/assets/images/logo/logo.png" alt="" />
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="mx-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll    >

    //         <LinkContainer to='/'><Nav.Link> Home </Nav.Link> </LinkContainer>

    //         {/* <LinkContainer to='/about'> <NavDropdown title="Service" id="navbarScrollingDropdown">
    //               <NavDropdown.Item >Services</NavDropdown.Item>
    //               <NavDropdown.Item > Service Details</NavDropdown.Item>
    //             </NavDropdown></LinkContainer>

    //             <LinkContainer to='/contact'>   <NavDropdown title="Project" id="navbarScrollingDropdown">
    //               <NavDropdown.Item >Project</NavDropdown.Item>
    //               <NavDropdown.Item >Project Details</NavDropdown.Item>
    //             </NavDropdown></LinkContainer> */}
    //         {/* 
    //             <LinkContainer>  <NavDropdown title="Pages" id="navbarScrollingDropdown">
    //               <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
    //               <NavDropdown.Item href="#action4">
    //                 FAQ
    //               </NavDropdown.Item>

    //             </NavDropdown></LinkContainer>

    //             <LinkContainer>  <NavDropdown title="Blogs" id="navbarScrollingDropdown">
    //               <NavDropdown.Item >Blog List Left Sidebar</NavDropdown.Item>
    //               <NavDropdown.Item > Blog List Right Sidebar</NavDropdown.Item>
    //             </NavDropdown></LinkContainer>

    //             <LinkContainer>     <Nav.Link> Contact </Nav.Link></LinkContainer> */}

    //       </Nav>
    //       <Button variant="outline-success">Get Started</Button>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>

    </>

  )
}

export default Header
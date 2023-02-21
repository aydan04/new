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
<>
    <Navbar expand="lg" className='header '>
      <Container >
        <img src="https://htmldemo.net/strane/strane/assets/images/logo/logo.png" alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll    >

       <LinkContainer to='/home'><NavLink > Home </NavLink></LinkContainer>    
       <LinkContainer to='/service'><NavLink > Service </NavLink></LinkContainer>
       <LinkContainer to='/project'><NavLink > Project </NavLink></LinkContainer>
       <LinkContainer to='/pages'><NavLink > Pages </NavLink></LinkContainer>
       <LinkContainer to='/blogs'><NavLink > Blogs </NavLink></LinkContainer>
       <LinkContainer to='/contact'><NavLink > Contact </NavLink></LinkContainer>
           
  
          

          </Nav>
          <Button variant="outline-success">Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
    // <>
    //   <NavLink to='/'>Home</NavLink>
    //   <NavLink to='/about'>About</NavLink>

    // </>

  )
}

export default Header
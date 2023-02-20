import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

 class Footer extends Component {
  render() {
    return (
      <section className='footer'>
            
 <div className="container">
    <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
            <div className="column">
<img src="https://htmldemo.net/strane/strane/assets/images/logo/logo-dark.png" alt="" />
<p>There are many variation popular sheet <br /> containing available have version software <br /> like available.</p>
   <h2 className='mt-4'>Your address goes here.</h2>
   </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
            <div className="container">
                <div className="row lists">
                    <div className="col-12 col-sm-12 col-md-4">
                        <div className="column">
                            <h3>Company</h3>
                            <h6 className='mt-5'>About Us</h6>
                            <h6 className='mt-3'>Contact Us</h6>
                            <h6 className='mt-3'>Print Ads</h6>
                            <h6 className='mt-3'>FAQ's</h6>
                            <h6 className='mt-3'>Careers</h6>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                    <div className="column">
                            <h3>Company</h3>
                            <h6 className='mt-5'>Privacy Policy</h6>
                            <h6 className='mt-3'>Discussion</h6>
                            <h6 className='mt-3'>Terms&Conditions</h6>
                            <h6 className='mt-3'>Customer Support</h6>
                            <h6 className='mt-3'>Course FAQ's</h6>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                        <div className="column">
                            <h3>Company</h3>
                            <h6 className='mt-5'>Presentation</h6>
                            <h6 className='mt-3'>E-Books</h6>
                            <h6 className='mt-3'>Management Tool</h6>
                            <h6 className='mt-3'>Dashboard</h6>
                            <h6 className='mt-3'>Event Organizer</h6>
                        </div>
                        </div>
                </div>
            </div>
            </div>
    </div>
 </div>

 <div className="end ">
 <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </div>
      </section>
    )
  }
}

export default Footer
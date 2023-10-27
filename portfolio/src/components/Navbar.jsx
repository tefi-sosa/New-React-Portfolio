import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function navbar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar collapseOnSelect key={expand} fixed="bottom" expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <p></p>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <hr />
                {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <hr />
                  <Nav.Link href="#projects">PROJECTS</Nav.Link>
                  <hr />
                  <Nav.Link href="#education">EDUCATION</Nav.Link>
                  <hr />
                  <Nav.Link href="#contact">CONTACT</Nav.Link>
                  <hr />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default navbar;
import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from '@material-ui/core';
let tagline=<span style={{color:'red'}}>Attendlt</span>;
function Head() {
  return (<>
    <div className="navb">
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home"> {tagline}:Virtualizing The Future!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
        </Nav>
        <Button variant="contained" color="secondary">Login👨‍💼
        </Button>
      </Navbar>
    </div>
    </>);
}
export default Head;
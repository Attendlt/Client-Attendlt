import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Nav ,Button} from 'react-bootstrap';
import * as routes from "../constants/routes";
import { Link } from "react-router-dom";
let tagline=<span style={{color:'red'}}>Attendlt</span>;
function Head() {
  return (<>
    <div>
        <div className="navb">
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home"> {tagline}:Virtualizing The Future!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to={routes.WELCOME}>Home</Link></Nav.Link>
          <Nav.Link><Link to={routes.FEATURE}>Features</Link></Nav.Link>
          <Nav.Link><Link to={routes.ABOUT}>About Us</Link></Nav.Link>
        </Nav>
        <Link to={routes.SIGNUP}>
        <Button variant="contained" color="secondary">Register👨‍💼
        </Button></Link>/<Link to={routes.SIGNIN}>
        <Button variant="contained" color="secondary">Login👨‍💼
        </Button></Link>
      </Navbar></div></div>
    </>);
}
export default Head;
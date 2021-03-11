import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import * as routes from "../constants/routes";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import "./header.css";

let tagline = <span style={{ color: "red" }}>Attendlt</span>;

function Head() {
  const [{ uid, finishedSetup }] = useStateValue();

  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <div className="navhead">
      <div className="navb">
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>
            <Link
              to={uid ? routes.HOME : routes.WELCOME}
              className="head_navlink"
            >
              {tagline} : Virtualizing The Future!
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {uid ? (
                finishedSetup ? (
                  <Nav.Link>
                    <Link to={routes.DETECT} className="head_navlink">
                      Take Attendance
                    </Link>
                  </Nav.Link>
                ) : (
                  <Nav.Link>
                    <Link to={routes.ENROLL} className="head_navlink">
                      Enroll
                    </Link>
                  </Nav.Link>
                )
              ) : (
                <></>
              )}

              <Nav.Link>
                <Link to={routes.ABOUT} className="head_navlink">
                  Testimonials
                </Link>
              </Nav.Link>
            </Nav>

            {uid ? (
              <Button variant="danger" onClick={handleSignout}>
                Signout
              </Button>
            ) : (
              <>
                <Link to={routes.SIGNUP}>
                  <span className="btnsu">
                    <Button
                      variant="contained"
                      color="secondary"
                      className="Btnsu"
                    >
                      Register
                    </Button>
                  </span>
                </Link>
                /
                <Link to={routes.SIGNIN}>
                  <span className="btnsu">
                    <Button variant="contained" color="secondary">
                      Login
                    </Button>
                  </span>
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default Head;

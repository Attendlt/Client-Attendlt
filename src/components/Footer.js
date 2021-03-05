import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from "react-social-icons";
import "./styler.css";
import { useStateValue } from "../StateProvider";
import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

let tagline = <span style={{ color: "rgb(73, 240, 240)" }}>Attendlt</span>;
const FooterPage = () => {
  const [{ uid }] = useStateValue();

  return (
    <div className="main-footer">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title" style={{ color: "rgb(73, 240, 240)" }}>
                Team Members: IIIT Pune
              </h5>
              <p>
                <ul>
                  <li className="ls=ist-unstyled">Swarnim Pratap Singh</li>
                  <li className="ls=ist-unstyled">Vimal Gupta</li>
                  <li className="ls=ist-unstyled">Sakshi Ramsinghani</li>
                  <li className="ls=ist-unstyled">Aditi Dwivedi</li>
                </ul>
              </p>
            </MDBCol>

            <MDBCol md="4">
              <h5 className="title">{tagline}:Virtualising the future</h5>
              <h6 style={{ color: "grey" }}>
                {" "}
                Our support team is available via various channels like
                instagram, email and GitHub. We strive to provide proactive
                support before even you reach out to us!
              </h6>
              <p></p>
            </MDBCol>

            <MDBCol md="4">
              <h5 className="title" style={{ color: "rgb(73, 240, 240)" }}>
                SocialMedia Platform Details
              </h5>
              <ul>
                <li
                  className="list-unstyled"
                  style={{ color: "grey", marginBottom: 10 }}
                >
                  <SocialIcon
                    url="https://www.facebook.com/"
                    network="facebook"
                    fgColor="white"
                    bgColor="rgb(10, 43, 70)"
                    target="_blank"
                  />{" "}
                  Facebook
                </li>

                <li className="list-unstyled" style={{ color: "grey" }}>
                  <SocialIcon
                    url="https://instagram.com"
                    network="instagram"
                    fgColor="white"
                    bgColor="black"
                    target="_blank"
                  />{" "}
                  Instagram
                </li>

                <li className="list-unstyled" style={{ color: "grey" }}>
                  <SocialIcon
                    url="https://github.com/AttendanceProj/Attendlt"
                    network="github"
                    bgColor="rgb(3, 24, 44)"
                    fgColor="grey"
                    target="_blank"
                  />
                  GitHub: Contribute to our Project
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="footer-copyright text-center py-3"
          style={{ background: "rgb(10, 43, 70)" }}
        >
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <Link to={uid ? routes.HOME : routes.WELCOME}>{tagline}</Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;

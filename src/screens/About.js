import pic from "./pic.jpg";
import React from "react";
import "./Welcome.css";
let tagline = <span style={{ color: "red" }}>Attendlt</span>;
let r = <span style={{ color: "red" }}>Reviews!</span>;
function T() {
  return (
    <div>
      <div className="abtform">
        <div className="poster-abt">
          <div className="about">
            <h2>
              Here Are Few Of The Testimonials For {tagline}:Attendance System
            </h2>
            <h6>
              A testimonial is a third party statement that comments on how good
              someone or something is. And for us,A good testimonial from our
              great User is what matters!
            </h6>
          </div>
        </div>
        <div className="poster-about"></div>
        <div id="test" className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="card d-flex mx-auto"
                style={{ height: "fit-content" }}
              >
                <div className="card-image">
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://www.iiitp.ac.in/sites/default/files/styles/people_photo/public/2019-06/bhupendra.jpg?itok=z383VBvs"
                    alt="bhupendra sir"
                  />{" "}
                </div>
                <div className="card-text">
                  <div className="card-title">{r}</div> This application is a
                  safe and reliable way of taking attendance. It has a
                  user-friendly interface, it's optimised for mobile and
                  suitable for current times and future alike.
                </div>
                <div className="footer">
                  {" "}
                  <span id="name">
                    Dr. Bhupendra Singh
                    <br />
                  </span>{" "}
                  <span id="position">
                    Assistant Professor, CSE Dept
                    <br />
                    IIIT Pune
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card d-flex mx-auto"
                style={{ height: "fit-content" }}
              >
                <div className="card-image">
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://www.iiitp.ac.in/sites/default/files/styles/thumbnail/public/2020-09/preview-full-Rohan%20Lekhwani_0.jpg?itok=3XIoEBG9"
                    alt="rohan sir"
                  />{" "}
                </div>
                <div className="card-text">
                  <div className="card-title">{r}</div> Its scalable, secure and
                  optimised for any device. Use of Firebase, made storing and
                  retrieval of dynamic content easy and use of 68 Point Face
                  Landmark Detection Models has made its speed commendably fast.
                </div>
                <div className="footer">
                  {" "}
                  <span id="name">
                    Rohan Lekhwani
                    <br />
                  </span>{" "}
                  <span id="position">
                    Final Year, CSE
                    <br />
                    IIIT Pune
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card d-flex mx-auto "
                style={{ height: "fit-content" }}
              >
                <div className="card-image">
                  {" "}
                  <img
                    className="img-fluid"
                    src={pic}
                    alt="Shreyash Kadu"
                  />{" "}
                </div>
                <div className="card-text">
                  <div className="card-title">{r}</div> Its new, fascinating and
                  fuss-free to give attendance using this app. Its perfect to
                  prevent proxy attendance, a concern for teachers and
                  authorities.
                </div>
                <div className="footer">
                  {" "}
                  <span id="name">
                    Shreyas Kadu
                    <br />
                  </span>{" "}
                  <span id="position">
                    Second Year Student,iiitp
                    <br />
                    IIIT Pune
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default T;

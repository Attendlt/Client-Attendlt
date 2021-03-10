import React from "react";
import "./Welcome.css";
import Footbt from '../components/Footbt';
let tagline = <span style={{ color: "red" }}>Attendlt</span>;

function Welcome() {
  return (
    <div>
      <title>Attendance System</title>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      {/* <link rel="stylesheet" href="styles.css">*/}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Ubuntu&display=swap"
        rel="stylesheet"
        />
      <div className="poster">
        <div className="about">
          <h2>Touchless Face recognition based Employee Attendance</h2>
          <h6>
            In current times, a safe Touchless entry for your employee is an
            important safety measure And,here we present you with our online
            face recognition attendance marking system {tagline} It's a robust,
            accurate and secure attendance system.
          </h6>
        </div>
        <Footbt/>

        <div id="features" className="rows">
          <div className="cols">
            <div className="cards">
              <h3>Face recognition based</h3>
              <p>100% Robust, Accurate and Secure.</p>
            </div>
          </div>
          <div className="cols">
            <div className="cards">
              <h3>No Hardware required</h3>
              <p>Runs on any web browser.</p>
            </div>
          </div>
          <div className="cols">
            <div className="cards">
              <h3>Employees Attendance using own mobile</h3>
              <p>Geo-fenced. Face based.</p>
            </div>
          </div>

          <div className="cols">
            <div className="cards">
              <h3>Rules &amp; Compliance</h3>
              <p>Half day mark, Over time, Long absence alerts and more.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="video">
        <video width={750} height={400} controls>
          <source
            src="https://wordpress-375262-1702015.cloudwaysapps.com/wp-content/uploads/2021/01/truein-attendance-demo-1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="test" className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card d-flex mx-auto">
              <div className="card-image">
                {" "}
                <img
                  className="img-fluid"
                  src="https://www.iiitp.ac.in/sites/default/files/styles/people_photo/public/2019-06/bhupendra.jpg?itok=z383VBvs"
                  alt="bhupendra sir"
                />{" "}
              </div>
              <div className="card-text">
                <div className="card-title">Lorem Ipsum!</div> Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus Duis leo. Donec sodales sagittis magna
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
            <div className="card d-flex mx-auto">
              <div className="card-image">
                {" "}
                <img
                  className="img-fluid"
                  src="https://www.iiitp.ac.in/sites/default/files/styles/thumbnail/public/2020-09/preview-full-Rohan%20Lekhwani_0.jpg?itok=3XIoEBG9"
                  alt="rohan sir"
                />{" "}
              </div>
              <div className="card-text">
                <div className="card-title">Lorem Ipsum!</div> Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus Duis leo. Donec sodales sagittis magna
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
            <div className="card d-flex mx-auto ">
              <div className="card-image">
                {" "}
                <img className="img-fluid" src="sy.png" alt="new sir" />{" "}
              </div>
              <div className="card-text">
                <div className="card-title">Lorem Ipsum!</div> Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus Duis leo. Donec sodales sagittis magna
              </div>
              <div className="footer">
                {" "}
                <span id="name">
                  XYZ
                  <br />
                </span>{" "}
                <span id="position">
                  Second Year
                  <br />
                  IIIT Pune
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

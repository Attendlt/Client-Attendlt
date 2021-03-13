import React from "react";
import "./Welcome.css";
import Footbt from '../components/Footbt';
import { Button } from '@material-ui/core';
import * as routes from "../constants/routes";
import {Link} from 'react-router-dom';
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
        <br/>
        <br/>
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
        <video width={350} height={300} controls>
          <source
            src="https://wordpress-375262-1702015.cloudwaysapps.com/wp-content/uploads/2021/01/truein-attendance-demo-1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* testimonial button section */}
      <div className="poster-abt">

       <div className="about">
                <h2>Here Are Few Of The Testimonials For {tagline}:Attendance System</h2> </div>
          <div className="footer">
        <Link to ={routes.ABOUT}><Button variant ="primary" style={{background:'lightblue',width:'40%',height:'2000%',position:'relative','box-shadow': 'inset 0 0.2 0.2 0.8 grey'}}>Testimonials
        </Button></Link>
    </div>
      </div>
    </div>
  );
}

export default Welcome;

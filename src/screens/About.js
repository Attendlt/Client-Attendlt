import pic from './pic.jpg';
import React from "react";
import "./Welcome.css";
let tagline = <span style={{ color: "red" }}>Attendlt</span>;

function T() {
    return <div>
<div className="poster-abt">

            <div className="about">
                <h2>Here Are Few Of The Testimonials For {tagline}:Attendance System</h2> 
        <h6>A testimonial is a third party statement that comments on how good someone or something is. And for us,A good testimonial from our great User is what matters!
          </h6></div>
</div>
            <div className="poster-about"></div>
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
                            <img className="img-fluid" src={pic} alt="new sir" />{" "}
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
    </div>;
}
export default T;
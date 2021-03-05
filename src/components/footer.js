import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
import './styler.css';
let tagline=<span style={{color:'rgb(73, 240, 240)'}}>Attendlt</span>;
const FooterPage = () => {
    return (<>

    <div className="main-footer">
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title" style={{color:'rgb(73, 240, 240)'}}>Team Members: IIIT Pune</h5>
                        <p>
                           <ul>
                               <li className="ls=ist-unstyled">Vimal Gupta</li>
                               <li className="ls=ist-unstyled">Sakshi Ramsinghani</li>
                               <li className="ls=ist-unstyled">Aditi Dwivedi</li>
                               <li className="ls=ist-unstyled">Swarnim Pratap Singh</li>
                           </ul>

            </p>
                    </MDBCol>
                     <MDBCol md="4">
                        <h5 className="title">{tagline}:Virtualising the future</h5>
                       <h6 style={{color:"grey"}}> Our support team is available via various channels like  instagram, email and GitHub. We strive to provide proactive support before even you reach out to us!</h6> 
                        <p>
            </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title" style={{color:'rgb(73, 240, 240)'}}>SocialMedia Platform Details</h5>
<ul>

<li className="list-unstyled" style={{color:'grey'}}>

                        <SocialIcon url="https://www.facebook.com/" network="facebook" fgColor="white" bgColor="rgb(10, 43, 70)" /> Facebook
</li>
                          
<li className="list-unstyled" style={{color:'grey'}}>

                        <SocialIcon url="https://instagram.com" network="instagram" fgColor="white" bgColor="black" /> Instagram
                       
</li>
                       
<li className="list-unstyled" style={{color:'grey'}}>

                            <SocialIcon url="https://github.com/AttendanceProj/Attendlt" network="github" bgColor="rgb(3, 24, 44)" fgColor="grey" />GitHub: Contribute to our Project
</li>

</ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3" style={{background:'rgb(10, 43, 70)'}}>
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#">{tagline}</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    </div>
    </>
    );
}

export default FooterPage;
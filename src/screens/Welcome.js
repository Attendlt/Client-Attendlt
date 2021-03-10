import React from "react";
import  './Welcome.css';
let tagline = <span style={{ color: "red" }}>Attendlt</span>;
function Welcome() {
  return <div><title>Attendance System</title>
    {/* <link rel="stylesheet" href="C:\Users\HP-PC\Desktop\Indep Project\fontawesome-free-5.15.2-web.zip\fontawesome-free-5.15.2-web\css\all.css" />*/}
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
  {/* <link rel="stylesheet" href="styles.css">*/}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Ubuntu&display=swap" rel="stylesheet" />
  <div className="poster">
    <div className="about">
      <h2>Touchless Face recognition based Employee Attendance</h2>
      <h6>In current times, a safe Touchless entry for your employee is an important safety measure And,here we present you with our online face recognition attendance marking system {tagline} It's a robust, accurate and secure attendance system.</h6>
    </div>
  
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
      <source src="https://wordpress-375262-1702015.cloudwaysapps.com/wp-content/uploads/2021/01/truein-attendance-demo-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div id="test" className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card d-flex mx-auto">
          <div className="card-image"> <img className="img-fluid" src="https://www.iiitp.ac.in/sites/default/files/styles/people_photo/public/2019-06/bhupendra.jpg?itok=z383VBvs" /> </div>
          <div className="card-text">
            <div className="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
          </div>
          <div className="footer"> <span id="name">Dr. Bhupendra Singh<br /></span> <span id="position">Assistant Professor, CSE Dept<br />IIIT Pune</span> </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card d-flex mx-auto">
          <div className="card-image"> <img className="img-fluid" src="https://www.iiitp.ac.in/sites/default/files/styles/thumbnail/public/2020-09/preview-full-Rohan%20Lekhwani_0.jpg?itok=3XIoEBG9" /> </div>
          <div className="card-text">
            <div className="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
          </div>
          <div className="footer"> <span id="name">Rohan Lekhwani<br /></span> <span id="position">Final Year, CSE<br />IIIT Pune</span> </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card d-flex mx-auto ">
          <div className="card-image"> <img className="img-fluid" src="sy.png" /> </div>
          <div className="card-text">
            <div className="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
          </div>
          <div className="footer"> <span id="name">XYZ<br /></span> <span id="position">Second Year<br />IIIT Pune</span> </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{width: '100%'}} className="end">
    <div style={{float: 'left', width: '35%'}} className="find">
      <h3>Creators</h3>
      <p>Swarnim Pratap Singh</p>
      <p>Vimal Gupta</p>
      <p>Sakshi Ramsinghani</p>
      <p>Aditi Dwivedi</p>
      <br />
      <p style={{fontSize: 12}}>© 2021 AttendIt-all rights reserved.</p>
    </div>
    <div style={{float: 'left', width: '35%'}} className="mail">
      <h3>Email Us At</h3>
      <p>attendit4@gmail.com</p>
    </div>
    <div style={{float: 'left', width: '20%'}} className="social">
      <h3>Follow Us</h3>
      <a className="footer-link" href="https://www.linkedin.com/" target="_blank"><img className="foot-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///9MTEz8/PyTk5PNzc339/c4ODjo6OhPT0+MjIzu7u6xsbERERGnp6fy8vIiIiLe3t6fn58+Pj5GRkaBgYF6enpfX1/R0dG6urqPj4/X19eZmZlmZmZZWVlkZGQuLi4xMTEZGRlycnK3t7fExMQnJycdHR0+1Fr0AAAFB0lEQVR4nO2daXeqMBCGQW8RcEG02kXa2lbo//+H17WKLJPKjFnO+3wup/Mck5BkksHzrwhHcTQdezYynkbxKLwW8sp62UB3mJ0ZZGGjYRDrjo6JOKg3nOgOjJFJjWES6Y6KlSi5NkwL3TExU6RlwwfdAQnwcGmY6o5GhPRsmLjWRA8Uya+hW4PMmehk6NJroszkYBjojkOQYG/oykymjnhnGOqOQpRwa5jpDkKUbGto/2qijYHvud1It83UG+kOQZiR5/JIuiP2XJ3PnIi8qe4QhJl6dm46qeO6HwAAACBB722ZbWaLt3fdgcjwcZG6GuZL3eGwsxxeJeb6bu0OPFUyjy6l47bMavycynfkDYK+H651x8ZCXQv9xYWdrOZfcD+q6g6vO0198MSz7gC78kQI+v5Md4gdae2EB+xOPy5pQf9Fd5CduJ7J1PKpO8oOfKgIWt0TR0qGNic/FMaZHXPdcd5MT03QX+gO9GbeFA3tPeyg8q7YkesO9GYyRUN7D1VtnDekZt32Gy4UDe3th+6Ppe+Khq+6A70dpYm371u8Q9y+g3Ei0R1mB9Re+VYfyuk73kjVZjUr3UF2I6ANe7pj7EZMCtr7uj/yQAgOv3RH2Blinf+oO77urFsFv3WHx8GgZWbjhOCW56Y+6EATPVK/UMztH2TOFC8Vv5Xl78EKn7PLQTUZWT1Va2K+mORpmuaTVyf1AAAAAAAAAACA+zL+Wc/n6+JHdxwyPC436anGU/j8Ejt2E3s+q+6vDx8Wwnd5e36/Hf9f/YMB9dz1ZY1lWtE70M+fZA0pGgzJ3GrZcNF6ZCAUvGZ1H8PKraqqo9j5x3sY/lAZvD0roVOsdzCkk7BHZA4myRtW8wWNpBJn5qUN100jaC2BQDZP2PBR4SRECf47j7KGc6XzOiXYO6Oo4effBflPYEka/iTU39TC/CtKGiq9Bmvg7YtyhvnrjYLM5yPkDIe3dMIDAed7Uc6wC5xH58005BxtDDVkvENuqiHfoVZTDX22NbGxhmzXOo01ZPsRzTXk+hHNNfSZduAMNmQ6YH43w2G6SsO/PWSTYf5d7He2p++bPyz6eTYY72DYL1cs+Fa8TsbVTOUNN5UqsZniszw3ysQN65papLj4ZznmKmzYrw/yS62YA8tiX9iwMT+o1Bk35hs2j4aPKs+zLDBEDdtq96jcI2eZuEka9ltT9Qrb/QFHASdJw/bKiyqFVThW+oKGAXHlZkUbcqQUBQ2pKYlCXpHj3pWgIbWELWhDjotJgobkKRK6mRpuSP7vpkuBthjSNSXp/LfZhnRJSboYgNmGdAHbfzCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEoYBhRP6Xhpug5HP0NWX6VhBHqehx1GsnWtc/SDzWi+j7n2vyfwuXiQYAAAAAAPfC9Ynd2KtUEnOMqefYl2oqRB5/IX6ziD3uIvWmMfLYatUaSugxVo02kYHvEfW2bCfbGrrdTMOtocBnTcwh9neGge4wBAn2hkJfUTKBiX8wZNlWNZH9ZvbeMOGor2geRfJryPo9DHM41M48ZhfoJIl9HD/Tc8qfpK411OJU/fQ3Q5S4Ndyci0lf5MBcemlMzlqXWb7AldlNfFm4vpzHDDP7VxqDrFwKvJKpDUdxNLVze2o8jeJRpdL5f2YjU4xtkVEnAAAAAElFTkSuQmCC" /></a>
      <a className="footer-link" href="https://twitter.com/?lang=en" target="_blank"><img className="foot-img" src="data:image/png;base64,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" /></a>
      <a className="footer-link" href="https://www.instagram.com/" target="_blank"><img className="foot-img" src="data:image/png;base64,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" /></a> 
    </div>
    <br style={{clear: 'left'}} />
  </div></div>;
}

export default Welcome;

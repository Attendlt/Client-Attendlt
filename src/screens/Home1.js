import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <>
        <title>Home Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        {/* navbar-dark style: font-size: 100px */}
        <div className="bg-img">
          <div className="bg-text">
            <h1>
              <b>
                <span>To begin </span>a new day and end a day{" "}
                <span>well spent...</span>
              </b>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6" id="card1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">How to Sign Up?</h5>
                <p className="card-text"></p>
                <ul>
                  <li>Click on the "Sign Up" link on the top right corner</li>
                  <li> Enter and submit your details</li>
                  <li>
                    Let your take snaps of your face in diffrent
                    orientations(keep your webcam on in chrome)
                  </li>
                  <li>Congrats, you are registered....</li>
                </ul>
                <p />
              </div>
            </div>
          </div>
          <div className="col-sm-6" id="card2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">How to Log In?</h5>
                <p className="card-text"></p>
                <ul>
                  <li>Click on "Log In" at the top right corner</li>
                  <li>Enter your email and password</li>
                  <li>Allow the webcam to scan your face</li>
                  <li>
                    your morning/evening attendance is marked with timestamp
                  </li>
                  <li>Happy Working!!</li>
                </ul>
                <p />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;

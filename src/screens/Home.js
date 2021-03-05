import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import { auth } from "../firebase";
import Nav from '../components/header';
function Home() {
  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <div>
      render this page please
      <button onClick={handleSignout}>Signout</button>
      <Link to={routes.ENROLL}>Enroll</Link>
      <Link to={routes.DETECT}>Detect</Link>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
function Home() {
  return (
    <div>
      This is home page
      <Link to={routes.ENROLL}>Enroll</Link>
    </div>
  );
}

export default Home;

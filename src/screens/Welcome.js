import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

function Welcome() {
  return (
    <div>
        <Link to={routes.SIGNUP}>Signup</Link>
        <Link to={routes.SIGNIN}>Signin</Link>
    </div>
  );
}

export default Welcome;

import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import Nav from '../components/header';
import Down from '../components/footer';

function Welcome() {
  return (<>
    <Nav/>
    <Down/>
    </>
  );
}

export default Welcome;

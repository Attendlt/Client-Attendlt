import { useStateValue } from "../StateProvider";
import React from "react";
import Homie from './Home1';
// import { Link } from "react-router-dom";
// import * as routes from "../constants/routes";

/**
 * jab tak banda enroll na kare tak tak uski maar ka rakho
 * enroll par hi
 */

function Home() {
  const [{ finishedSetup }] = useStateValue();

  return (
    <div>
      <Homie/>        
      <br />
      {finishedSetup ? (<>
        "welcome to attendlt"
        </>
      ) : (
        <>
          <br />
          Bhai enroll konkrega 
          <br />
        </>
      )}
    </div>
  );
}

export default Home;

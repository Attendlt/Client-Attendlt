import { useStateValue } from "../StateProvider";
import React from "react";
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
      This is home page
      <br />
      {finishedSetup ? (
        "welcome to attendlt"
      ) : (
        <>
          <br />
          Please enroll yourself to continue
          <br />
        </>
      )}
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import { useStateValue } from "../StateProvider";

/**
 * jab tak banda enroll na kare tak tak uski maar ka rakho
 * enroll par hi
 */

function Home() {
  const [{ finishedSetup }] = useStateValue();

  return (
    <div>
      This is home page
      {finishedSetup ? (
        "welcome to attendlt"
      ) : (
        <>
          <br />
          Please enroll yourself to continue
          <br />
          <Link to={routes.ENROLL}>Enroll</Link>
        </>
      )}
    </div>
  );
}

export default Home;

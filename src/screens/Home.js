import { useStateValue } from "../StateProvider";
import React from "react";
import Homie from './Home1';
import {Button} from 'react-bootstrap'

import * as routes from "../constants/routes";
import {Link} from 'react-router-dom';
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
             <div className="footer">
        <Link to ={routes.ENROLL}><Button variant ="primary" style={{color:'white',width:'40%',height:'200%',position:'relative', 'box-shadow': 'inset 0 0.2 0.2 0.8 grey'}}>Enroll Yourself 
        </Button></Link>
    </div>
          <br />
        </>
      )}
    </div>
  );
}

export default Home;

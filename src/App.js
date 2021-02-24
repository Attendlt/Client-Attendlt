import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import * as routes from "./constants/routes";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import Enroll from "./screens/Enroll";
import Detect from "./screens/Detect";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        // console.log(authUser);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {};
  }, []);

  return (
    <Router>
      <Switch>
        {user ? (
          <>
            <Route exact path={routes.DETECT}>
              <Detect />
            </Route>

            <Route exact path={routes.ENROLL}>
              <Enroll />
            </Route>

            <Route to={routes.HOME}>
              <Home />
            </Route>

            <Redirect to={routes.HOME}>
              <Home />
            </Redirect>
          </>
        ) : (
          <>
            <Route exact path={routes.SIGNIN}>
              <Signin />
            </Route>

            <Route exact path={routes.SIGNUP}>
              <Signup />
            </Route>

            <Route to={routes.WELCOME}>
              <Welcome />
            </Route>

            <Redirect to={routes.WELCOME}>
              <Welcome />
            </Redirect>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;

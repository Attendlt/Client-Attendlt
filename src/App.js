import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import * as routes from "./constants/routes";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import Enroll from "./screens/Enroll";
import Detect from "./screens/Detect";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import About from "./screens/About";
import FooterPage from "./components/Footer";
import Head from "./components/Header";

function App() {
  const [{ uid, finishedSetup }, dispatch] = useStateValue();

  useEffect(() => {
    async function startupFunc() {
      try {
        auth.onAuthStateChanged(async (authUser) => {
          if (authUser) {
            // user is logged in
            const uid = authUser?.uid;

            if (uid) {
              dispatch({
                type: "SET_UID",
                uid: uid,
              });

              try {
                var data = await db.collection("users").doc(uid).get();

                if (data.exists) {
                  data = data.data();

                  dispatch({
                    type: "SET_USER",
                    features: data.features,
                    name: data.name,
                    collegeId: data.collegeId,
                    finishedSetup: data.finishedSetup,
                  });
                }
              } catch (e) {
                console.log(e);
              }
            }
          } else {
            // user is logged out
            dispatch({
              type: "SET_UID",
              uid: null,
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    }

    startupFunc();
    return () => {};
  }, [dispatch]);

  return (
    <Router>
      <Head />

      <Switch>
        <Route exact path={routes.ABOUT}>
          <About />
        </Route>

        {uid ? (
          <>
            {finishedSetup && (
              <Route exact path={routes.DETECT}>
                <Detect />
              </Route>
            )}

            {!finishedSetup && (
              <Route exact path={routes.ENROLL}>
                <Enroll />
              </Route>
            )}

            <Route exact path={routes.HOME}>
              <Home />
            </Route>

            <Redirect to={routes.HOME}>
              <Home />
            </Redirect>
          </>
        ) : (
          <>
            <Route path={routes.SIGNIN}>
              <Signin />
            </Route>

            <Route path={routes.SIGNUP}>
              <Signup />
            </Route>

            <Route exact path={routes.WELCOME}>
              <Welcome />
            </Route>

            <Redirect to={routes.WELCOME}>
              <Welcome />
            </Redirect>
          </>
        )}
      </Switch>

      <FooterPage />
    </Router>
  );
}

export default App;

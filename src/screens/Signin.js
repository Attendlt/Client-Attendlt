import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Form, Button } from "react-bootstrap";
import { useStateValue } from "../StateProvider";

function Signin() {
  const [{ user }, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return () => {};
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      auth
          .signInWithEmailAndPassword(email, password)
          .then((authUser) => {
            if (authUser) {
              const user = authUser?.user;
              dispatch({
                type: "SET_USER",
                user: user,
              });
            }
          })
          .catch((err) => console.log(err));
    }
  };

  return (
      <div className="container mt-4">
        <Form onSubmit={handleSubmit}>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  );
}

export default Signin;

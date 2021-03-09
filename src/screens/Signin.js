import React, { useState } from "react";
import { auth } from "../firebase";
import { Form, Button } from "react-bootstrap";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(async (authUser) => {
          if (authUser) {
            console.log("Login Successful!!");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="container mt-4" style={{ width: "70%", padding: "10%" }}>
        <h2
          style={{ color: "grey", textAlign: "center", textDecoration: "bold" }}
        >
          Welcome to The Attendlt!
        </h2>
        <h3
          style={{
            color: "#ff3300",
            textAlign: "center",
            textDecoration: "bold",
          }}
        >
          To Login In Your Account, Fill the following details!
        </h3>
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
          <Button
            type="submit"
            style={{ width: "45%", marginLeft: "25%", background: "#ff3300" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signin;

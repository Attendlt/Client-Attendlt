import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Form, Button } from "react-bootstrap";
import "./Welcome.css";
function Signup() {
  const [name, setName] = useState(null);
  const [InsId, setInsId] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password && InsId) {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(async (authUser) => {
          if (authUser) {
            const uid = authUser?.user?.uid;

            db.collection("users").doc(uid).set({
              name: name,
              finishedSetup: false,
              features: null, // means get the institute id and face features of the student
              collegeId: InsId,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="poster-signup">
        <div
          className="container mt-4"
          style={{ width: "70%", padding: "10%" }}
        >
          <div className="form">
            <h2
              style={{
                color: "grey",
                textAlign: "center",
                textDecoration: "bold",
              }}
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
              You need to fill the following details to register!
            </h3>
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Institute ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter InstituteID"
                  value={InsId}
                  onChange={(e) => setInsId(e.target.value)}
                />
              </Form.Group>

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
                style={{ width: "45%", background: "#ff3300" }}
              >
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

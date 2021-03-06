import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Form, Button } from "react-bootstrap";
import { useStateValue } from "../StateProvider";

function Signup() {
  const [dispatch] = useStateValue();

  const [name, setName] = useState("");
  const [InsId, setInsId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password && InsId) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(async (authUser) => {
          if (authUser) {
            const uid = authUser?.user?.uid;
            dispatch({
              type: "SET_UID",
              uid: uid,
            });

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
          You need to fill the following details to register!
        </h3>
        <Form onSubmit={handleSubmit}>
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
            style={{ width: "45%", marginLeft: "28%", background: "#ff3300" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Signup;

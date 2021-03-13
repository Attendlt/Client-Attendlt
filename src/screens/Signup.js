import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Form, Button } from "react-bootstrap";
import './Welcome.css';

function EmailAuth() {
  const [email, setEmail] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      await auth
        .createUserWithEmailAndPassword(email)
        .then(async (authUser) => {
          if (authUser) {
            const uid = authUser?.user?.uid;

            db.collection("users").doc(uid).set({
              finishedSetup: false,
              features: null, // means get the institute id and face features of the student
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
    <div className="poster-signup">
      <div className="container mt-4" style={{ width: "70%", padding: "10%" }}>
        <div className="form">
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
          You need to verify your email first to register!
        </h3>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button
            type="submit"
            style={{ width: "45%", background: "#ff3300" }}
          >
            Verify
          </Button>
        </Form>
      </div>
      </div>
      </div>
    </>
  );
}

export default EmailAuth;

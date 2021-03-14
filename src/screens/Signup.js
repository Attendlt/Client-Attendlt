import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Form, Button } from "react-bootstrap";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import "./Welcome.css";


function Signup() {
  const [name, setName] = useState(null);
  const [InsId, setInsId] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
   const [open, setOpen] = React.useState(false);

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
              instituteId: InsId,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChange = (event) => {
    setInsId(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="poster-signup">
        <div
          className="container mt-4"
          style={{ width: "70%", padding: "10%" }}
        >
          <h2>Welcome to The Attendlt!</h2>
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
              <Form.Label style={{paddingRight:'15%'}}>Select Your Institute ID : </Form.Label> 
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={InsId}
          onChange={handleChange}
        style={{width:'50%'}}
        
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={1119184}>11191684</MenuItem>
          <MenuItem value={1119185}>11191685</MenuItem>
          <MenuItem value={1119186}>11191686</MenuItem>
        </Select>
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
    </>
  );
}

export default Signup;

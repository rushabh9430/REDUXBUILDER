import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { auth } from "../config/FirebaseConfig";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // when you work with firebase you aa lot of the stuff returned promises so you do to need async await or .then .catch ➡️⬇️
  const SignIn = async () => {
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Registration successfully babe')
    }catch(error) {
        toast.error(new Error(error).message)
    }
  };
  return (
    <div>
      <div className="container raw col-md-6 border p-5">
        <h1>Registration</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={SignIn}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registration;

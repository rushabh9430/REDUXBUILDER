import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, GoogleProvider } from "../config/FirebaseConfig";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // when you work with firebase you aa lot of the stuff returned promises so you do to need async await or .then .catch ➡️⬇️
  const SignIn = async () => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
        
      const user = {
        email: data?.user.email,
        name: data?.user.displayName,
        photo: data?.user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successfully babe");
      navigate('/team')
    } catch (error) {
      toast.error(new Error(error).message);
    }
  };
  const SignInWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, GoogleProvider);
      console.log("data++", data);

      const user = {
        email: data?.user.email,
        name: data?.user.displayName,
        photo: data?.user.photoURL,
      };

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/team");
      toast.success("Sign in With Google");
    } catch (error) {
      toast.error(new Error(error).message);
    }
  };
  return (
    <div>
      <div className="container raw col-md-6 border p-5">
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
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
        <div className="d-flex justify-content-between mt-5">
          <button className="btn btn-primary " onClick={SignInWithGoogle}>
            Sign in with Google{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

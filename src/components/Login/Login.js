import React from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import googleIcon from "../../images/icon/google icon.png";
import loginImg from "../../images/log-2.jpg";
import "./Login.css";
const Login = () => {
  const { user, setUser, signInUsingGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((res) => {
      console.log(res.user);
      setUser(res.user);
    });
  };
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center border p-5"
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center border border-success shadow-lg rounded bg-login">
        <h1 className="text-color mt-3">Login</h1>
        <Button onClick={handleGoogleSignIn} className="m-4" bg="light">
          <img
            src={googleIcon}
            className="me-2"
            width="30"
            height="30"
            alt=""
          />
          Sign in with Google
        </Button>
      </div>
    </Container>
  );
};

export default Login;

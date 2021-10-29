import React from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import googleIcon from "../../images/icon/google icon.png";
const Login = () => {
  const { user, setUser, signInUsingGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((res) => {
      console.log(res.user);
      setUser(res.user);
    });
  };
  return (
    <Container className="border rounded my-auto py-4 w-75">
      <div className="fs-3">Login</div>
      <Button onClick={handleGoogleSignIn} border="info" bg="light">
        <img src={googleIcon} className="me-2" width="30" height="30" alt="" />
        Sign in with Google
      </Button>
    </Container>
  );
};

export default Login;

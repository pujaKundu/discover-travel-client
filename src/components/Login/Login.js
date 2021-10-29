import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import googleIcon from "../../images/icon/google icon.png";
import loginImg from "../../images/Login/log.jpg";
import "./Login.css";
const Login = () => {
  const { setUser, signInUsingGoogle, setIsLoading } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        setIsLoading(true);
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center border p-5 "
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center border border-dark rounded py-4">
        <h1 className="text-color mt-3">Login</h1>
        <Button onClick={handleGoogleSignIn} className="m-4 btn-color border-0">
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

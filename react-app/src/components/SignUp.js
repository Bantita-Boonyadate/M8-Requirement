import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import loginImg from "../images/img-login3.jpg";

function Signup({ className }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const addUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/auth/sign-up", {
        name: name,
        password: password,
        email: email,
      })
      .then((response) => {
        localStorage.setItem(`token`, response.data);
        history.push("/home");
      });
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3001/sign-in").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className={className}>
        {/* <div className="container">
            <h1>Sign Up</h1>
  
            <form id="create-form" className="createform">
              <div className="input-group">
               
                <input
                  name="name"
                  type="text"
                  id="name"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                />
              </div>
  
              <div className="input-group">
               
                <input
                  name="email"
                  type="email"
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                />
              </div>
  
              <div className=" input-group">
                
                <input
                  name="password"
                  type="password"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
              </div>
  
              <div className="btnSignup">
                <button onClick={addUser}>Sign Up</button>
              </div>
              
  
              <Link to="/sign-in" className="link-login">Already have account ?</Link>
  
            </form>
          </div> */}
        <div className="box">
          <div className="inner-box">
            <Container className="mt-5 pb-5">
              <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-1 p-3">
                  <div>
                    <h2 className="text-signup">Create Account</h2>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(event) => setName(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-signup"
                      onClick={addUser}
                    >
                      SignUp
                    </Button>
                    {/* <Link to="/sign-up">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-signup"
                      >
                        SignUp
                      </Button>
                    </Link> */}
                    <Link to="/sign-in" className="link-signin">
                      Already have account ?
                    </Link>
                  </Form>
                </Col>
                <Col lg={8} md={6} sm={12}>
                  <img className="w-100 mt-4 img-signup" src={loginImg} alt="login-img" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default styled(Signup)`
  .box {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .inner-box {
    border-radius: 20px;
    width: 90%;
    transition: 0.5s;
    box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
    border: 1px solid whitesmoke;
    background-color: lightblue;
  }
  .inner-box:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
  .text-signup {
    color: white;
  }
  .btn-primary {
    color: #fff;
    background-color: #813afe;
    border-color: #813afe;
  }
  .btn-signup {
    margin-right: 10px;
    width: 100%;
    margin-bottom: 15px;
  }
  .link-signin {
    color: gray;
    text-decoration: none;
    transition: 0.2s;
  }
  .link-signin:hover {
    color: black;
  }
  
`;

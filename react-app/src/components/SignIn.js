import React, { useEffect, useState } from "react";
import ReactFacebookLogin from "react-facebook-login";
import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import loginImg from "../images/img-login2.jpg";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn({ className }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const responseFacebook = async (response) => {
    const { name, email, accessToken, userID } = response;
    const user = { name, email, accessToken, userId: userID };

    const res = await axios({
      method: "post",
      url: "http://localhost:8080/auth/sign-in/facebook",
      data: { user },
    });
    localStorage.setItem(`token`, JSON.stringify(res.data.token));
    localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
    history.push("/home"); 
  };

  const onClickSignIn = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/auth/sign-in", {
      email: email,
      password: password
    })
    .then((response) => {
      history.push('/home')
    })
  };


  useEffect(() => {
    axios.get("http://localhost:8080/auth/sign-in").then((response) => {
      console.log(response);
    })
  }, []);

  return (
    <>
      <div className={className}>
        <div className="box">
          <div className="inner-box">
            <Container className="mt-5 pb-5">
              <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                  <div>
                    <h3>Sign In</h3>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onClickSignIn}>
                      SignIn
                    </Button>
                    <Link to="/sign-up">
                    <Button variant="primary" type="submit">
                      SignUp
                    </Button>
                    </Link>
                    <ReactFacebookLogin
                      appId="1006115476601013"
                      fields="name,email,picture" //เอาอะไรมาจากfacebookบ้าง
                      scope="public_profile, email"
                      callback={responseFacebook}
                    />
                  </Form>
                </Col>
                <Col lg={8} md={6} sm={12}>
                  <img className="w-100" src={loginImg} alt="login-img" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* <ReactFacebookLogin
        appId="1006115476601013"
        fields="name,email,picture" //เอาอะไรมาจากfacebookบ้าง
        scope="public_profile, email"
        callback={responseFacebook}
      /> */}
    </>
  );
}

export default styled(SignIn)`
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
    background-color: pink;
  }
  .inner-box:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
  .btn-primary {
    color: #fff;
    background-color: #813afe;
    border-color: #813afe;
  }
`;

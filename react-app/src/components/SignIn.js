import React from "react";
import ReactFacebookLogin from "react-facebook-login";
import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import loginImg from "../images/img-login2.jpg";
import { useHistory } from "react-router-dom";

function SignIn({ className }) {
  const history = useHistory();

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
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      SignIn
                    </Button>
                    <Button variant="primary" type="submit">
                      SignUp
                    </Button>
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

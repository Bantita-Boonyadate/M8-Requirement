import React, { useState } from "react";
import styled from "styled-components";
import { Link ,useHistory} from "react-router-dom";
import axios from "axios";

function Signup({ className }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
    const addUser = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8080/auth/sign-up', {
        name: name,
        password: password,
        email: email,
      }).then((response) => {
        console.log(response);
        
        history.push('/home')
        
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
          <div className="container">
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
          </div>
        </div>
      </>
    );
  }
  
  export default styled(Signup)`
  height: 600px;
  padding-top: 50px;
  
  
    .container {
      background-color: white;
      width: 380px;
      height: 530px;
      padding: 30px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
      transition: .3s;
    }
    .container:hover {
      box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
    }
   
    h1 {
      margin-top: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
    form label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
    form input {
      padding: 0.3rem 0.7rem;
      font-size: 1rem;
      line-height: 1.5;
      outline: none;    
      border-bottom: 1.5px solid #ced4da;
      border-top: none;
      border-left: none;
      border-right: none;
      width: 100%;
      transition: .3s;
  
    }
    form input:hover {
      border-bottom: 1.5px solid darkgray;
    }
    
    .btnSignup {
      display: flex;
      justify-content: center;
    }
    button {
      width: 100%;
      transition: .3s;
      margin-top: 30px;
      
    }
    button:hover {
      box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
    }
    form button {
      font-size: 1rem;
      line-height: 1.5;
      padding: 0.5rem 0.7rem;
      cursor: pointer;
      color: #ffffff;
      background-color: #28a745;
      border-radius: 0.75rem;
      border: none;
      margin-bottom: 30px;
    }
    form .input-group {
      margin-bottom: 1.5rem;
    }
    .link-login {
      margin: 0 auto;
      color: gray;
      text-decoration: none;
      transition: 0.2s;
      margin-left: 25%;
    }
    .link-login:hover {
      color: black;
    }
   
  `;
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function PostForm({ className }) {
    const history = useHistory();
    const [imageURL, setImageURL] = useState("");
    const [caption, setCaption] = useState("");

    // const token = useState(localStorage.getItem(`token`))[0];
    const [token] = React.useState(JSON.parse(localStorage.getItem("token")));

    const onClickPost = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/timeline/post", {
            imageURL: imageURL,
            caption: caption
          },{
            headers: { Authorization: `Bearer ${token}`}
          })
          .then((response) => {
            history.push('/Timeline');
          });
    }

  return (
    <>
      <div className={className}>
        <div className="container">
          <h1>Create new post</h1>
          <form
            id="create-form"
            className="createform"
          >
            <div className="input-group">
              <input
                type="text"
                onChange={(event) => setImageURL(event.target.value)}
                placeholder="Image URL"
              />
            </div>

            <div className=" input-group">
              <input
                type="text"
                onChange={(event) => setCaption(event.target.value)}
                placeholder="Caption"
              />
            </div>

            <div className="btnLogIn">
              <button onClick={onClickPost} type="button">
                Share
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default styled(PostForm)`
  height: 600px;
  padding-top: 50px;

  .container {
    background-color: white;
    width: 380px;
    height: 450px;
    padding: 30px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
    transition: 0.3s;
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
    transition: 0.3s;
  }
  form input:hover {
    border-bottom: 1.5px solid darkgray;
  }

  .btnLogIn {
    display: flex;
    justify-content: center;
  }
  button {
    width: 100%;
    transition: 0.3s;
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
  .link-signup {
    margin: 0 auto;
    color: gray;
    text-decoration: none;
    transition: 0.2s;
    margin-left: 25%;
  }
  .link-signup:hover {
    color: black;
  }
`;

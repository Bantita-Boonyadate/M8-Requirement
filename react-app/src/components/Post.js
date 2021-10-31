import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import PostFetchData from "./PostFetchData";

function Post({ className }) {
  const [post, setPost] = useState([]);
  const [token] = React.useState(JSON.parse(localStorage.getItem("token")));

  useEffect(() => {
    async function getPost() {
      const posts = await axios.get("http://localhost:8080/timeline/post", {
        headers: { Authorization: `Bearer ${token}`}
      });
      setPost(posts.data);
    }
    getPost();
  }, []);

  return (
    <div className={className}>
      <div className="post_header">
        
          <Row className="card-container">
            {post.map((value) => {
              return <PostFetchData key={value._id} item={value} />;
            })}
          </Row>
        
      </div>
    </div>
  );
}

export default styled(Post)`
  .post_header {
    display: flex;
    width: 50%;
    background-color: white;
    margin: 20px auto 20px auto;
    /* border: 1px solid lightgray; */
    /* width: 100%; */
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .each-card {
    transition: 0.5s;    
    width: 100%;
    box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
    border: 1px solid lightgray;
    text-align: center;
    margin-bottom: 20px;
  }
  .each-card:hover {
   box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
  .post_boxImg {
    max-width: 100%;
  }
  .post_image {
    width: 100%;
  }
  .post_boxtext {
    display: flex;
  }
  .post_text {
    margin: 20px 15px 20px 15px;
  }

`;

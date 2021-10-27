import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import PostFetchData from "./PostFetchData";

function Post({ className }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const posts = await axios.get("http://localhost:8080/timeline/post");
      setPost(posts.data);
    }
    getPost();
  }, []);

  return (
    <div className={className}>
      <div className="post_header">
        <Container>
          <Row>
            {post.map((value) => {
              return <PostFetchData key={value._id} item={value} />;
            })}
          </Row>
        </Container>
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
    border: 1px solid lightgray;
    background-color: lightsalmon;
    /* width: 100%; */
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
    margin: 20px 0px 20px 0px;
  }
  .post_boxform {
    margin-bottom: 15px;
  }
  .post_form {
    display: flex;
    margin-top: 20px;
  }
  .post_input {
    flex: 1;
  }
`;

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import PostImage from "../components/PostImage";

function Post({ className }) {
  const [catimg, setCatimg] = useState([]);

  useEffect(() => {
    async function getCatImage() {
      const cats = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=30&page=10&order=Desc?format=src&api_key=5cb7b913-fb18-4752-befa-688dd219170d"
      );
      setCatimg(cats.data);
    }
    getCatImage();
  }, []);

  return (
    <div className={className}>
      <div className="post">
        <div className="post_header">
          <Container>
            <Row>
              {catimg.map((value) => {
                return <PostImage key={value.id} item={value} />
              })};
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default styled(Post)`
  .post {
    /* display: flex;
    width: 50%;
    background-color: white;
    margin: 20px auto 20px auto;
    border: 1px solid lightgray;
    background-color: lightsalmon; */
  }
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

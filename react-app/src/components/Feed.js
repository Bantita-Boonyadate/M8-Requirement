import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import FeedImage from "./FeedImage";

function Feed({ className }) {
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
      <div className="post_header">
        <Row className="card-container">
          {catimg.map((value) => {
            return <FeedImage key={value.id} item={value} />;
          })}
        </Row>
      </div>
    </div>
  );
}

export default styled(Feed)`
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

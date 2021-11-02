import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { ListItemAvatar, Avatar } from "@mui/material";
import ProfileFetchData from "./ProfileFetchData";

function Profile({ className }) {
  const [post, setPost] = useState([]);
  const [token] = React.useState(JSON.parse(localStorage.getItem("token")));
  const [name] = React.useState(JSON.parse(localStorage.getItem("name")));

  useEffect(() => {
    async function getPost() {
      const posts = await axios.get("http://localhost:8080/timeline/post", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPost(posts.data);
    }
    getPost();
  }, []);

  return (
    <div className={className}>
      <div className="post_header">
        <div className="profile_body">
          <Row>
            <Col lg={4} md={6} sm={12} className="profile_image">
              <ListItemAvatar>
                <Avatar
                  className="profile_avatar"
                  src="https://media.istockphoto.com/photos/dog-puppy-on-garden-picture-id1142412853?k=20&m=1142412853&s=170667a&w=0&h=NnF4qnVYIqZFdSn2fiUPhhQGdBmuARQ8FrPU1mEWm3o="
                  alt="User"
                />
              </ListItemAvatar>
            </Col>
            <Col lg={8} md={6} sm={12} className="profile_boxtext">
              <div className="profile-text">
                <label className="profile-name">{`${name}`}</label>
              </div>
            </Col>
          </Row>
        </div>

        <Row className="card-container">
          {post.map((value) => {
            return <ProfileFetchData key={value._id} item={value} />;
          })}
        </Row>
      </div>
    </div>
  );
}

export default styled(Profile)`
.post_header {
    margin: 15px 50px;
}
  
  .profile-body {
    margin-bottom: 30px;
    display: flex;
  }
  .profile_image {
    display: flex;
    justify-content: center;
  }
  .profile_avatar {
    width: 150px;
    height: 150px;
  }
  .profile_boxtext {
    display: flex;
    justify-content: left;
  }
  .profile-name {
    font-size: 25px;
    padding-top: 40px;
  }
  .card-container {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .each-card {
    transition: 0.5s;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
    border: 1px solid whitesmoke;
    text-align: center;
  }
  .each-card:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
  .card-image {
    height: 225px;
    width: auto;
  }
  img {
    border-radius: 10px;
    height: 100%;
    object-fit: cover;
  }
`;

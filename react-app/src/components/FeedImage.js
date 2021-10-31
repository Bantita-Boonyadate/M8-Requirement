import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { Col, Card } from "react-bootstrap";

function FeedImage({ item }) {
  return (
    <Col className="post_body" md={12} sm={12}>
      <Card className="each-card">
        <ListItem>
          <ListItemAvatar>
            <Avatar
              className="post_avatar"
              src="https://media.istockphoto.com/photos/dog-puppy-on-garden-picture-id1142412853?k=20&m=1142412853&s=170667a&w=0&h=NnF4qnVYIqZFdSn2fiUPhhQGdBmuARQ8FrPU1mEWm3o=" //ใช้api profile แบบrandom
              alt="User"
            />
          </ListItemAvatar>
          <ListItemText primary="username" secondary="Chiang Mai, Thailand" />
        </ListItem>
        <div className="post_boxImg">
          <img className="post_image" src={item.url} alt="Post pic" />
        </div>
        <div className="post_boxtext">
          <h5 className="post_text">
            <label>username: </label>
            caption
          </h5>
        </div>
      </Card>
    </Col>
  );
}

export default FeedImage;

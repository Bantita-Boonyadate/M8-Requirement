import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@mui/material";
import { Col, Card } from "react-bootstrap";

function PostFetchData({ item }) {
  const [name] = React.useState(JSON.parse(localStorage.getItem("name")));

  return (
    <Col className="post_body" md={12} sm={12}>
      <Card className="each-card">
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className="post_avatar"
            src="https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/introducing-a-dog-to-a-cat-home.jpg?v=1593020063"
            alt="User"
          />
        </ListItemAvatar>
        <ListItemText primary={`${name}`} secondary="Chiang Mai, Thailand" />
      </ListItem>
      <div className="post_boxImg">
        <img className="post_image" src={item.imageURL} alt="Post pic" />
      </div>
      <div className="post_boxtext">
        <label className="post_text">
          <label>{`${name}`}: {item.caption}</label>
        </label>
      </div>
      </Card>
    </Col>
  );
}

export default PostFetchData;

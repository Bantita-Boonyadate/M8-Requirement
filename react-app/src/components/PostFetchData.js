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
            src="https://media.istockphoto.com/photos/dog-puppy-on-garden-picture-id1142412853?k=20&m=1142412853&s=170667a&w=0&h=NnF4qnVYIqZFdSn2fiUPhhQGdBmuARQ8FrPU1mEWm3o="
            alt="User"
          />
        </ListItemAvatar>
        <ListItemText primary={`${name}`} secondary="Chiang Mai, Thailand" />
      </ListItem>
      <div className="post_boxImg">
        <img className="post_image" src={item.imageURL} alt="Post pic" />
      </div>
      <div className="post_boxtext">
        <h5 className="post_text">
          <label>{`${name}`}: </label>
          {item.caption}
        </h5>
      </div>
      </Card>
    </Col>
  );
}

export default PostFetchData;

import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Comments from "./Comments";
import { Col } from "react-bootstrap";

function PostFetchData({ item }) {
  return (
    <Col className="post_body" md={12} sm={12}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className="post_avatar"
            src="https://media.istockphoto.com/photos/dog-puppy-on-garden-picture-id1142412853?k=20&m=1142412853&s=170667a&w=0&h=NnF4qnVYIqZFdSn2fiUPhhQGdBmuARQ8FrPU1mEWm3o="
            alt="User"
          />
        </ListItemAvatar>
        <ListItemText primary="username" secondary="Chiang Mai, Thailand" />
      </ListItem>
      <div className="post_boxImg">
        <img className="post_image" src={item.imageURL} alt="Post pic" />
      </div>
      <div className="post_boxtext">
        <h5 className="post_text">
          <strong>username: </strong>
          {item.caption}
        </h5>
      </div>
      <div className="post_comments">
        <Comments />
      </div>
    </Col>
  );
}

export default PostFetchData;

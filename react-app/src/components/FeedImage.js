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

function FeedImage({ item }) {
  return (
    <Col className="post_body" md={12} sm={12}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className="post_avatar"
            src="https://source.unsplash.com/random" //ใช้api profile แบบrandom
            alt="User"
          />
        </ListItemAvatar>
        <ListItemText primary="username" secondary="Chiang Mai, Thailand" />
      </ListItem>
      <div className="post_boxImg">
        <img
          className="post_image"
          src={item.url}
          alt="Post pic"
        />
      </div>
      <div className="post_boxtext">
        <h5 className="post_text">
          <strong>username: </strong>caption
        </h5>
      </div>
      <div className="post_comments">
        <Comments />
      </div>
      <div className="post_boxform">
        <form className="post_form">
          <TextField
            label="add comment"
            size="small"
            variant="outlined"
            className="post_input"
            placeholder="add comment"
          />
          <Button variant="contained" size="small" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
    </Col>
  );
}

export default FeedImage;
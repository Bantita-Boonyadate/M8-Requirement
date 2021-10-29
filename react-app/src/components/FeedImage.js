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
      </Card>
    </Col>
  );
}

export default FeedImage;
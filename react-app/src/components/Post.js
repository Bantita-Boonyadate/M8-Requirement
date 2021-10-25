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
import "../styles/Post.css";
import { Container, Row, Col } from "react-bootstrap";

function Post() {
  return (
    <div className="post">
      <div className="post_header">
        <Container>
          <Row>
            <Col className="post_body" lg={12} md={12} sm={12}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className="post_avatar"
                    src="https://source.unsplash.com/random" //ใช้api profile แบบrandom
                    alt="User"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="username"
                  secondary="Chiang Mai, Thailand"
                />
              </ListItem>
              <img
                className="post_image"
                src="https://api.thecatapi.com/v1/images/search?format=src&api_key=5cb7b913-fb18-4752-befa-688dd219170d"
                alt="Post pic"
              />
              <h4 className="post_text">
                <strong>username: </strong>caption
              </h4>
              <div className="post_comments">
                <Comments />
              </div>
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Post;

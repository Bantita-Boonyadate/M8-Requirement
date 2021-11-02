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
              src="https://wallpaperaccess.com/full/5284947.jpg"
              alt="User"
            />
          </ListItemAvatar>
          <ListItemText primary="Catplanet" />
        </ListItem>
        <div className="post_boxImg">
          <img className="post_image" src={item.url} alt="Post pic" />
        </div>
        <div className="post_boxtext">
          <label className="post_text">
            <label>Catplanet: Cat</label>
          </label>
        </div>
      </Card>
    </Col>
  );
}

export default FeedImage;

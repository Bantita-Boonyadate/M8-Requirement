import React from "react";
import { Col, Card } from "react-bootstrap";

function ProfileFetchData({ item }) {
  return (
    <Col className="profile-body" sm={6} md={4}>
      <Card className="each-card">
        <div className="card-image">
          <Card.Img className="image-menu" variant="top" src={item.imageURL} />
        </div>
      </Card>
    </Col>
  );
}

export default ProfileFetchData;

import React from "react";
import { Card, Button } from "react-bootstrap";



export default function RoomCard(props) {
  return (
    <Card>
      <Card.Header>Created by {props.data['creator']}</Card.Header>
      <Card.Body>
        <Card.Title>{props.data['name']}</Card.Title>
        <Card.Text>
          {props.data['data']}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

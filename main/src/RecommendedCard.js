import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";


export default class RecommendedCard extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Card.Img variant="top" src="holder.js/100px180" />
              </Col>
              <Col xs={8}>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

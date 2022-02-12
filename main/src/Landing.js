import RecommendedCard from "./RecommendedCard";
import RoomCardGroup from './RoomCardGroup.js'
import NavigationBar from "./NavigationBar.js";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React from "react";
import Topics from "./Topics";

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <div>
          <Row>
            <Col xs={8}>
              {/* <RecommendedCard /> */}
              <Topics/>
            </Col>
            <Col>
              <br/>
              <RoomCardGroup />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

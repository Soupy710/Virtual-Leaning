import React from 'react'
import TopicCard from './TopicCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Topics = () => {
    return (
        <div>
            <br/>
            <Row>
                <Col>
            <TopicCard topic='Physics'/>
                </Col>
                <Col>
            <TopicCard topic='Chemistry'/>
                </Col>
                <Col>
            <TopicCard topic='Biology'/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
            <TopicCard topic='Mathematics'/>
                </Col>
                <Col>
            <TopicCard topic='English'/>
                </Col>
                <Col>
            <TopicCard topic='History'/>
                </Col>
            </Row>
        </div>
    )
}

export default Topics

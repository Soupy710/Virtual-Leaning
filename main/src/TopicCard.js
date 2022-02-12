import React from 'react'
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from 'axios';

const TopicCard = (props) => {
    const sendTopic = () => {
        axios.post('http://localhost:5000/userclickdata', {
            topic: props.topic.toLowerCase()
          })
    }
    
    let s = "/"+props.topic.toLowerCase();
    return (
        <div>
            <Card>
            <Card.Header>{props.topic}</Card.Header>
            <Card.Body>
                <Card.Text>
                Interested in learning {props.topic}? Turn the card over! 
                </Card.Text>
                <Link to={s}>
                    <Button variant="primary" onClick={sendTopic}> Click</Button>
                </Link>
            </Card.Body>
            </Card>    
        </div>
    )
}

export default TopicCard
//git@github.com:MHDYousuf/AgoraWebSDK-NG-React.git   
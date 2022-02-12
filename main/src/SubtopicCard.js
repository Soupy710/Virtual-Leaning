import React from 'react'
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const SubtopicCard = (props) => {
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
                    <Button variant="primary">Click</Button>
                </Link>
            </Card.Body>
            </Card>    
        </div>
    )
}

export default SubtopicCard
//git@github.com:MHDYousuf/AgoraWebSDK-NG-React.git   
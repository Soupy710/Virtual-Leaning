import React from 'react'
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import SubtopicCard from './SubtopicCard'
import axios from 'axios';  
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Subtopic = (props) => {

    const [subs, setSubs] = useState([])
    var s = 'http://localhost:5000/'+ props.topic
    console.log(s)
    
    useEffect(() => {
        axios.get(s).then(
            (res) => {
                setSubs(res['data']['subtopics'])
                console.log(subs)
            }
            )
        }, []);
        
        var arr = [<Row>,</Row>]
        arr.pop()
        for(let i=0; i<subs.length; i++){
            let tno = 'topic'+(i+1)
            arr.push(<Col><SubtopicCard key={tno} topic={props.topic} subtopic={subs[i]}/></Col>)
        }
        arr.push(<Row>,</Row>)
        arr.splice(arr.length-1,1)

    return (
        <div>
            {arr} 
        </div>
    )
}

export default Subtopic
//git@github.com:MHDYousuf/AgoraWebSDK-NG-React.git   
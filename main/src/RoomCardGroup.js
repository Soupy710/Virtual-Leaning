import React from 'react'
import RoomCard from './RoomCard.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import {useState, useEffect} from 'react'


const RoomCardGroup = () => {
    var pubrows = [];   
    var prirows = [];   
    const [pubnum, setPubNum] = useState()
    const [prinum, setPriNum] = useState()
    const [publist, setPublist] = useState([])
    const [prilist, setPrilist] = useState([])
    


    useEffect(() => {
        axios.get('http://localhost:5000/publicroom').then(
            (res) => {
                console.log("In pub")
                setPubNum(parseInt(res['data']['num']))
                for (let i = 1; i <= pubnum; i++) {
                    let s = 'card' + i
                    setPublist(publist => [...publist, <Row><RoomCard key={i}  data = {res['data'][s]} /></Row>]);
                    console.log("res['data'][s]")
                    console.log(res['data'][s])
                }
            }
        )
    }, [pubnum])

    // for (var i = 1; i <= pubnum; i++) {
    //     let s = 'card' + i
    //     pubrows.push(<Row><RoomCard key={i}  data = {pub[s]} /></Row>);
    // }
    
    useEffect(() => {
        axios.get('http://localhost:5000/privateroom').then(
            (res) => {
                setPriNum(parseInt(res['data']['num']))
                for (let i = 1; i <= prinum; i++) {
                    let s = 'card' + i
                    setPrilist(prilist => [...prilist, <Row><RoomCard key={i}  data = {res['data'][s]} /></Row>]);
                }
            }
        )
    }, [prinum])

    // for (var i = 1; i <= prinum; i++) {
    //     let sp = 'card' + i
    //     prirows.push(<Row><RoomCard key={i} data = {pri[sp]}/></Row>);    
    // }

return (
       <div>
            <Card>
                <Card.Header>Public Rooms</Card.Header>
                <Card.Body>
                    {publist}
                </Card.Body>
            </Card>
            <br/>
            <Card>
                <Card.Header>Private Rooms</Card.Header>
                <Card.Body>
                    {prilist}
                </Card.Body>
            </Card>
        </div>
    )
}

export default RoomCardGroup

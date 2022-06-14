import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Stack, Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import BirthdayCardImage from './birthday.jpg'

const onlineStyle = {
    borderRadius:'50%',
    border: '2px solid #00FF00',
    padding: '1px'
}

const offlineStyle = {
    borderRadius:'50%',
    border: '2px dashed grey',
    padding: '1px'
}

const BirthdayApp = () => {

    const [birthdayData, setBirthdayData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const url = `/api/birthday-app/get-birthday`
        await axios.get(url)
                .then(res=>{
                    setBirthdayData(res.data?.data)
                }).catch(err=>{
                    console.error(err)
                })
        setLoading(false)
    }

    const sendGift = async (id, idx) => {
        setLoading(true)
        const url = `/api/birthday-app/send-gift`
        await axios.post(url, {
                    id: id
                })
                .then(res=>{
                    setBirthdayData(birthdayData.filter(f => f.id !== id))
                }).catch(err=>{
                    console.error(err)
                })
        setLoading(false)
    }

    const dismissAll = async () => {
        setLoading(true)
        let data =  birthdayData.map((m) => m.id)
        const url = `/api/birthday-app/send-gift-to-all`
        await axios.post(url, {
                    id: data
                })
                .then(res=>{
                    setBirthdayData([])
                }).catch(err=>{
                    console.error(err)
                })
        setLoading(false)
    }

    const makeMagic = async () => {
        setLoading(true)
        let data =  birthdayData.map((m) => m.id)
        const url = `/api/birthday-app/random-birthday-generate`
        await axios.get(url)
                .then(res=>{
                    fetchData()
                }).catch(err=>{
                    console.error(err)
                })
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="bg-info" style={{ minHeight: '80vh', overflow: 'hidden' }}>
                <Container>
                    <Row className="mt-4 justify-content-md-center">

                        <Col md="auto">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={BirthdayCardImage} />
                                <Card.Body>
                                    { (!loading) ? (
                                    <>
                                    <Card.Title className="text-center">
                                        <h5>Today's Birthdays</h5>
                                    </Card.Title>
                                    <Card.Text className="text-center">
                                        { new Date().toDateString() }
                                    </Card.Text>
                                    <hr/>
                                    <Stack>
                                        { birthdayData && birthdayData.map((data, idx) => (
                                        <div className="px-2 my-1" key={data.id}>
                                            <Row>
                                                <Col sm={3}>
                                                    <img
                                                      src={ data.image } alt="" width={50} height={45}
                                                      style={ data.is_online ? onlineStyle : offlineStyle } 
                                                    />
                                                </Col>
                                                <Col sm={7}>
                                                    <p style={{ margin:'0' }}>{ data.name }</p>
                                                    <small>{ data.age }Yrs</small>
                                                </Col>
                                                <Col sm={2}>
                                                    <Button variant="success" size="sm" onClick={ ()=> sendGift(data.id, idx) }>&#127873;</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                        ) ) }
                                        {/* <div className="px-2  my-1">
                                            <Row>
                                                <Col sm={3}>
                                                    <img
                                                      src={BirthdayCardImage} alt="" width={50} height={45}
                                                      style={onlineStyle} 
                                                    />
                                                </Col>
                                                <Col sm={7}>
                                                    <p style={{ margin:'0' }}>Arif Faysal</p>
                                                    <small>28Yrs</small>
                                                </Col>
                                                <Col sm={2}>
                                                   <span className="p-2 mt-2"> &#9989;</span>
                                                </Col>
                                            </Row>
                                        </div> */}
                                        <div className="d-grid gap-2 mt-2">
                                            { birthdayData.length > 0 ? (
                                                <Button variant="primary" size="sm" onClick={dismissAll}>Dismiss</Button>
                                            ) : (
                                                <Button variant="success" size="sm" onClick={makeMagic}>MAGIC</Button>
                                            )
                                            }
                                        </div>
                                    </Stack>
                                    </>
                                    ) : (
                                        <>
                                            <Spinner animation="border" style={{ display: 'block', margin:'0 auto' }} />
                                        </>
                                        )
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BirthdayApp
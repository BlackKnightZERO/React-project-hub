import React from "react";
import { Stack, Container, Row, Col, Card, Button } from 'react-bootstrap';
import BirthdayCardImage from './birthday.jpg'

const onlineStyle = {
    borderRadius:'50%',
    border: '2px solid #00FF00',
    padding: '1px'
}

const BirthdayApp = () => {
    return (
        <>
            <div className="bg-info" style={{ minHeight: '80vh', overflow: 'hidden' }}>
                <Container>
                    <Row className="mt-4 justify-content-md-center">

                        <Col md="auto">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={BirthdayCardImage} />
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        <h5>Today's Birthdays</h5>
                                    </Card.Title>
                                    <Card.Text className="text-center">
                                        <p>
                                            { new Date().toDateString() }
                                        </p>
                                        <hr />
                                    </Card.Text>
                                    <Stack>
                                        <div className="px-2 my-1">
                                            <Row>
                                                <Col sm={3}>
                                                    <img
                                                      src={BirthdayCardImage} alt="" width={50} height={45}
                                                      style={onlineStyle} />
                                                </Col>
                                                <Col sm={7}>
                                                    <p style={{ margin:0 }}>Arif Faysal</p>
                                                    <small>28Yrs</small>
                                                </Col>
                                                <Col sm={2}>
                                                    <Button variant="success" size="sm">&#127873;</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="px-2  my-1">
                                            <Row>
                                                <Col sm={3}>
                                                    <img
                                                      src={BirthdayCardImage} alt="" width={50} height={45}
                                                      style={onlineStyle} />
                                                </Col>
                                                <Col sm={7}>
                                                    <p style={{ margin:0 }}>Arif Faysal</p>
                                                    <small>28Yrs</small>
                                                </Col>
                                                <Col sm={2}>
                                                   <span className="p-2 mt-2"> &#9989;</span>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <Button variant="primary" size="sm">Dismiss</Button>
                                        </div>
                                    </Stack>
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
import React from "react"
import { Link } from "react-router-dom";
import { Stack, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from "../Layout/Header";
import Logo from "../../logo.svg"

const Landing = () => {
    return (
        <>
            {/* <Stack gap={4}> */}
                <div className="bg-white">
                    <Container>
                        <Row className="mt-4 justify-content-md-center">

                            <Col xs lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logo} className="project-logo" alt="logo" />
                                    <Card.Body className="project-card-body">
                                        <Card.Title className="text-center project-title">Birthday App</Card.Title>
                                            <Card.Text className="text-center" style={{ height: '5rem' }}>
                                                See who has birthdays
                                                <br />
                                                { new Date().toDateString() }
                                            </Card.Text>
                                        <Stack>
                                            <Link to="/birthday-app" className="mx-auto">
                                                <Button variant="primary">Take a tour</Button>
                                            </Link>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logo} className="project-logo" alt="logo" />
                                    <Card.Body className="project-card-body">
                                        <Card.Title className="text-center project-title">Tour App</Card.Title>
                                            <Card.Text className="text-center" style={{ height: '5rem' }}>
                                                Find your next travel destination
                                                <br />
                                            </Card.Text>
                                        <Stack>
                                            <Link to="/birthday-app" className="mx-auto">
                                                <Button variant="primary">Take a tour</Button>
                                            </Link>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </Row>

                        <Row className="mt-4 justify-content-md-center">

                            <Col xs lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logo} className="project-logo" alt="logo" />
                                    <Card.Body className="project-card-body">
                                        <Card.Title className="text-center project-title">Birthday App</Card.Title>
                                            <Card.Text className="text-center" style={{ height: '5rem' }}>
                                                See who has birthdays
                                                <br />
                                                { new Date().toDateString() }
                                            </Card.Text>
                                        <Stack>
                                            <Link to="/birthday-app" className="mx-auto">
                                                <Button variant="primary">Take a tour</Button>
                                            </Link>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logo} className="project-logo" alt="logo" />
                                    <Card.Body className="project-card-body">
                                        <Card.Title className="text-center project-title">Tour App</Card.Title>
                                            <Card.Text className="text-center" style={{ height: '5rem' }}>
                                                Find your next travel destination
                                                <br />
                                            </Card.Text>
                                        <Stack>
                                            <Link to="/birthday-app" className="mx-auto">
                                                <Button variant="primary">Take a tour</Button>
                                            </Link>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
            {/* </Stack> */}
        </>
    )
}

export default Landing
import React from "react"
import { Link } from "react-router-dom";
import { Stack, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from "../Layout/Header";

const Landing = () => {
    return (
        <>
            {/* <Stack gap={4}> */}
                <div className="bg-white">
                    <Container>
                        <Row className="mt-4">

                            <Col>
                                <Card className='ms-auto' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://picsum.photos/150" />
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Stack className="mx-auto">
                                            <Link to="/">
                                                <Button variant="primary">Go somewhere</Button>
                                            </Link>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://picsum.photos/150" />
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Stack className="mx-auto">
                                            <Link to="/first">
                                                <Button variant="primary">Go somewhere</Button>
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
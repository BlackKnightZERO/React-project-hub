import React from "react"
import { Stack, Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard'

const Landing = () => {
    return (
        <>
            {/* <Stack gap={4}> */}
                <div className="bg-white">
                    <Container>
                        <Row className="mt-4 justify-content-md-center">

                            <Col xs lg="3">
                                <ProjectCard
                                    title="Birthday App"
                                    description="See who has birthdays"
                                    addons={ new Date().toDateString() }
                                    url="/birthday-app"
                                />
                            </Col>
                            <Col xs lg="3">
                                <ProjectCard
                                    title="Tour App"
                                    description="Find your next travel destination"
                                    addons=""
                                    url="/birthday-app"
                                />
                            </Col>
                            
                        </Row>

                        <Row className="mt-4 justify-content-md-center">

                            <Col xs lg="3">
                                <ProjectCard
                                    title="Birthday App"
                                    description="See who has birthdays"
                                    addons={ new Date().toDateString() }
                                    url="/birthday-app"
                                />
                            </Col>
                            <Col xs lg="3">
                                <ProjectCard
                                    title="Tour App"
                                    description="Find your next travel destination"
                                    addons=""
                                    url="/birthday-app"
                                />
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
            {/* </Stack> */}
        </>
    )
}

export default Landing
import React from "react"
import { Link } from "react-router-dom";
import { Stack, Card, Button } from 'react-bootstrap';
import Logo from "../../logo.svg"


const ProjectCard = ({ title, description, addons, url }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Logo} className="project-logo" alt="logo" />
                <Card.Body className="project-card-body">
                    <Card.Title className="text-center project-title">{ title }</Card.Title>
                        <Card.Text className="text-center" style={{ height: '5rem' }}>
                            { description }
                            <br />
                            { addons }
                        </Card.Text>
                    <Stack>
                        <Link to={ url } className="mx-auto">
                            <Button variant="primary">Take a tour</Button>
                        </Link>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProjectCard
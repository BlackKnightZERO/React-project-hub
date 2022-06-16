import React from "react"
import { Card } from 'react-bootstrap';


const KeepCard = ({ title }) => {
    return (
        <>
            <Card style={{ width: '16rem', height: '16rem' }}>
                <Card.Body className="project-card-body">
                    <Card.Title className="text-center mb-2">{ title }</Card.Title>
                    <Card.Text className="text-left">
                        <ul>
                            <li>item 1</li>
                            <li>item 1</li>
                            <li>item 1</li>
                        </ul>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default KeepCard
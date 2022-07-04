import React from "react"
import { Card } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

const KeepCard = ({ title }) => {

    const { handleModalShow } = useKeep()

    return (
        <>
            <Card style={{ minWidth: '16rem', minHeight: '16rem', overflow: 'hidden' }} onClick={handleModalShow}>
                <Card.Body className="project-card-body">
                <Card.Title className="text-center mb-2">{ title }</Card.Title>
                    <div className="mt-3">
                        <ul>
                            <li>item 1</li>
                            <li>item 1</li>
                            <li>item 1</li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default KeepCard
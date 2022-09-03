import React from "react"
import { Card, Form } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

const KeepCard = ({ id, title, keepItems, dismissed }) => {

    const { handleModalShow } = useKeep()

    return (
        <>
            <Card 
                className="keep-app-sticker-card" 
                onClick={ () => !dismissed && handleModalShow(id, title, keepItems, false) }>
                <Card.Body className="keep-app-sticker-card-body" >
                <Card.Title className="text-center mb-2 keep-app-sticker-card-body-title">{ title }</Card.Title>
                    <div className="mt-3">
                        <ul className="keep-app-ul">
                        {
                            keepItems && keepItems.map(
                                (item) => (
                                        <li 
                                            key={item.id} 
                                            className="keep-app-li"
                                        >
                                        <Form.Check type="checkbox" className="keep-app-checkbox" checked={item.status} disabled />
                                            {item.title}</li>
                                    ))
                        }
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default KeepCard
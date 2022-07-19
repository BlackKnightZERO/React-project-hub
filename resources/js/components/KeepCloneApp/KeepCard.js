import React from "react"
import { Card, Form } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

const KeepCard = ({ id, title, keepItems }) => {

    const { handleModalShow } = useKeep()

    return (
        <>
            <Card 
                style={{ minWidth: '16rem', minHeight: '16rem', height: '16rem', overflow: 'hidden', background:'#F79000' }} 
                onClick={() => handleModalShow(id, title, keepItems)}>
                <Card.Body className="project-card-body" style={{ background:'#FCD134' }}>
                <Card.Title className="text-center mb-2" style={{ color: '#996600' }}>{ title }</Card.Title>
                    <div className="mt-3">
                        <ul className="keep-app-ul">
                        {
                            keepItems && keepItems.map(
                                (item) => (
                                        <li 
                                            key={item.id} 
                                            style={{ color: '#201f1e' }}
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
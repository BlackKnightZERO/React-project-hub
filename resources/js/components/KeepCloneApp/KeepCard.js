import React from "react"
import { Card } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

const KeepCard = ({ title, keepItems }) => {

    const { handleModalShow } = useKeep()

    return (
        <>
            <Card style={{ minWidth: '16rem', minHeight: '16rem', overflow: 'hidden', background:'#F79000' }} onClick={handleModalShow}>
                <Card.Body className="project-card-body" style={{ background:'#FCD134' }}>
                <Card.Title className="text-center mb-2" style={{ color: '#996600' }}>{ title }</Card.Title>
                    <div className="mt-3">
                        <ul>
                        {
                            keepItems && keepItems.map(
                                (item) => (
                                        <li 
                                            key={item.id} 
                                            style={{ color: '#201f1e' }}
                                        >{item.title}</li>
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
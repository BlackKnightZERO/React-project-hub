import React, { useState } from 'react';

import { Button, Form, Modal } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

const KeepModal = () => {

    const { modalShow, handleModalClose, modalId, modalTitle, modalItems } = useKeep()

    return (
        <>
            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mt-3">
                        <ul className="keep-app-ul">
                        {
                            modalItems && modalItems.map((
                                item) => (
                                    <li 
                                            key={item.id} 
                                            style={{ color: '#201f1e' }}
                                        >
                                        <Form.Check type="checkbox" className="keep-app-checkbox" checked={item.status} />
                                            {item.title}</li>
                                ))
                        }
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default KeepModal
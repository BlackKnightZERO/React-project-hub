import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useKeep } from "./Context/KeepContext";

const KeepModal = () => {

    const { modalShow, handleModalClose } = useKeep()

    return (
        <>
            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
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
import React, { useState, useRef } from 'react';

import { Button, Form, Modal } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

const KeepModal = () => {

    const { modalShow, handleModalClose, modalId, modalTitle, modalItems } = useKeep()

    const [newItem, setNewItem] = useState(null)
    const [newCollection, setNewCollection] = useState([])

    const inputRef = useRef(null);

    const handleCheckBoxChange = (id) => {
        console.log(id)
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        setNewItem(value)
    }

    const handleEnterKeyPress = (event) => {
        if(event.key === 'Enter'){
            const id = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
            setNewCollection(prev => {
                return [
                    ...prev,
                    {
                        id,
                        title: newItem,
                        status: 0,
                        new: true
                    }
                ]
            })
            setNewItem(null)
            inputRef.current.value = "";
        }
    }

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
                            modalItems && modalItems.map(
                                (item) => (
                                    <li 
                                            key={item.id} 
                                            style={{ color: '#201f1e' }}
                                        >
                                        <Form.Check type="checkbox" className="keep-app-checkbox" checked={item.status} onChange={ () => handleCheckBoxChange(item.id) } />
                                            {item.title}</li>
                            ))
                        }
                        {                
                            newCollection && newCollection.map(
                                (item) => (
                                    <li 
                                            key={item.id} 
                                            style={{ color: '#201f1e' }}
                                        >
                                        <Form.Check type="checkbox" className="keep-app-checkbox" checked={item.status} onChange={ () => handleCheckBoxChange(item.id) } />
                                            {item.title}</li>
                                )
                            )
                        }
                            <li>
                                <input type="text" 
                                    ref={inputRef}
                                    placeholder='+ List item'
                                    onChange={handleInputChange}
                                    onKeyPress={handleEnterKeyPress}
                                    style={{ display:'inline-block', width: '90%', outline: 'none', border: 'none', paddingLeft:'6%' }} 
                                />
                            </li>
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
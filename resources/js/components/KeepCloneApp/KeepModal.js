import { useState, useRef } from 'react';

import { Button, Form, Modal } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

import { uuid } from 'uuidv4';

import KeepItem from './KeepItem'

const KeepModal = () => {

    const { modalShow, handleModalClose, modalTitle, handleModalTitleChange, modalItems, handleAddNewModalItem, newModalItem } = useKeep()

    const inputRef = useRef(null);

    return (
        <>
            <Modal className='keep-app-modal' show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <input type="text" 
                            placeholder='Title...'
                            className='keep-app-modal-title-input'
                            onChange={ (e) => handleModalTitleChange(e) }
                            onKeyPress={ (e) => handleModalTitleChange(e) }
                            value={modalTitle}
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ul className="keep-app-ul">
                            {
                                modalItems && modalItems.map(
                                    (item) => (
                                        <KeepItem 
                                            key={item.id} 
                                            item={item}
                                        />
                                    )
                                )
                            }
                            <li>
                                <input type="text" 
                                    ref={inputRef}
                                    placeholder='+ List item'
                                    onChange={ (e) => handleAddNewModalItem(e) }
                                    onKeyPress={ (e) => handleAddNewModalItem(e) }
                                    value={newModalItem}
                                    className='todo-app-modal-item-input' 
                                />
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='keep-app-modal-save-btn' onClick={handleModalClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default KeepModal
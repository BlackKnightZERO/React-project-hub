import { FaTrashAlt, FaCloudDownloadAlt } from "react-icons/fa";

import {  useRef } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { useKeep } from "./Context/KeepContext";

import KeepItem from './KeepItem'

const KeepModal = () => {

    const { modalShow, handleModalClose, modalTitle, handleModalTitleChange, modalItems, handleNewModalItemChange, newModalItem, handleDestroyKeep, isNewKeep } = useKeep()

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
                                    onChange={ (e) => handleNewModalItemChange(e) }
                                    onKeyPress={ (e) => handleNewModalItemChange(e) }
                                    value={newModalItem}
                                    className='todo-app-modal-item-input' 
                                />
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-between flex-row-reverse mt-2'>
                    { !isNewKeep ? (
                    <Button variant="danger" onClick={handleDestroyKeep}>
                        <FaTrashAlt /> Delete Keep
                    </Button>
                    ) : null }
                    <Button variant="primary" className='keep-app-modal-save-btn' onClick={handleModalClose}>
                        <FaCloudDownloadAlt /> Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default KeepModal
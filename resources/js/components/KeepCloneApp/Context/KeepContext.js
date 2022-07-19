import React, { useContext, useState } from 'react';

const KeepContext = React.createContext()

export const useKeep = () => {
    return useContext(KeepContext)
}

export const KeepProvider = ({ children }) => {

    const [modalShow, setModalShow] = useState(false)
    const [modalId, setModalId] = useState(null)
    const [modalTitle, setModalTitle] = useState('')
    const [modalItems, setModalItems] = useState(null)

    const handleModalShow = (id, title, keepItems) => {
        setModalId(id)
        setModalTitle(title)
        setModalItems(keepItems)
        setModalShow(true)
    }
    const handleModalClose = () => {
        setModalId(null)
        setModalTitle('')
        setModalItems(null)
        setModalShow(false)
    }

    return <KeepContext.Provider value={{
        modalShow,
        setModalShow,
        handleModalClose,
        handleModalShow,
        modalId,
        modalTitle,
        modalItems
    }}>{children}</KeepContext.Provider>

}
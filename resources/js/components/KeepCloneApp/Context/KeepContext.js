import React, { useContext, useState } from 'react';

const KeepContext = React.createContext()

export const useKeep = () => {
    return useContext(KeepContext)
}

export const KeepProvider = ({ children }) => {

    const [modalShow, setModalShow] = useState(false)

    const handleModalClose = () => setModalShow(false)
    const handleModalShow = () => setModalShow(true)

    return <KeepContext.Provider value={{
        modalShow,
        setModalShow,
        handleModalClose,
        handleModalShow
    }}>{children}</KeepContext.Provider>

}
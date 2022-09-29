import React, { useContext, useState } from 'react'
import axios from 'axios';

const CryptoContext = React.createContext()

export const useCrypto = () => {
    return useContext(CryptoContext)
}

export const CryptoProvider = ({ children }) => {

    const modalFullScreen = true

    const [ loading, setLoading ] = useState(false)
    const [ assets, setAssets ] = useState([])
    const [ rowCount, setRowCount ] = useState(20)
    const [ showModal, setShowModal ] = useState(false)

    const fetchAssets = async () => {
        setLoading(true)
        const url = `https://api.coincap.io/v2/assets`
        await axios({
                        method: 'get',
                        url: url,
                        responseType: 'json',
                    })
                    .then(res=>{
                        console.log(res.data?.data)
                        setAssets(res.data?.data)
                    }).catch(err=>{
                        console.error(err)
                    })
        setLoading(false)
    }

    return <CryptoContext.Provider value={{
        loading,
        assets,
        rowCount,
        modalFullScreen,
        showModal,
        setRowCount,
        fetchAssets,
        setShowModal
    }}>{ children }</CryptoContext.Provider>
}
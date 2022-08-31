import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
import axios from 'axios';

const KeepContext = React.createContext()

export const useKeep = () => {
    return useContext(KeepContext)
}

export const KeepProvider = ({ children }) => {

    const [ modalShow, setModalShow ] = useState(false)
    const [ modalId, setModalId ] = useState(null)
    const [ modalTitle, setModalTitle ] = useState('')
    const [ modalItems, setModalItems ] = useState(null)
    const [ newModalItem, setNewModalItem ] = useState('')
    const [ mainData, setMainData ] = useState(null)

    const makeSlug = (title) => {
        let slug =  slugify(title, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: false,     // strip special characters except replacement, defaults to `false`
            locale: 'vi',       // language code of the locale to use
            trim: true         // trim leading and trailing replacement chars, defaults to `true`
        })
        return `${slug}-${Math.floor(Math.random() * (10000 - 1000) - 1000)}`
    }

    const handleModalShow = (id, title, keepItems) => {
        setModalId(id)
        setModalTitle(title)
        const modifiedItems = keepItems.map((item) => item.status === 0 ? {...item, status: false} : {...item, status: true})
        setModalItems(modifiedItems)
        setModalShow(true)
    }

    const handleModalClose = async () => {

        if(modalTitle) {
            // if( newModalItem !== '' ) {
            //     setModalItems(prev => [...prev, 
            //         {
            //             id : uuidv4(), 
            //             title : newModalItem, 
            //             status : 0, 
            //             slug : makeSlug(newModalItem)
            //         }])
            // }
            const url = `api/keep-app/store`
            const storeData = {
                id: modalId,
                title: modalTitle,
                slug: makeSlug(modalTitle),
                keeps: modalItems
            }
            await axios.post(url, storeData)
                        .then(res=>{
                            console.log(res)
                            // setUsers(res.data?.data)
                        }).catch(err=>{
                            console.error(err)
                        })
        }
        setModalId(null)
        setModalTitle('')
        setNewModalItem('')
        setModalItems(null)
        setModalShow(false)
    }

    const handleModalTitleChange = (e) => {
        const newTitle = e.target.value
        if(event.key === 'Enter'){

        }
        if(!newTitle && modalItems.length){
            alert(`Keep Title is requried!`)
        } else {
            setModalTitle(newTitle)
        }

    }

    const handleModalItemCheckBoxChange = (e, id) => {
        const status = e.target.checked
        const newModalItems = modalItems.map((item) => item.id === id ? {...item, status: status} : item)
        setModalItems(newModalItems)
    }

    const handleModalItemInputChange = (e, id) => {
        const input = e.target.value
        if(!input){
            alert(`Item is requried!`)
        }
        const newModalItems = modalItems.map((item) => item.id === id ? {...item, title: input} : item)
        setModalItems(newModalItems)
    }

    const handleAddNewModalItem = (e) => {
        if( e.key === 'Enter' && newModalItem !== '' ){
            const id = uuidv4()
            const title = e.target.value
            const status = 0
            const slug = makeSlug(title)
            setModalItems(prev => [...prev, {id, title, status, slug}])
            setNewModalItem('')
        } else {
            setNewModalItem(e.target.value)
        }
    }

    return <KeepContext.Provider value={{
        modalShow,
        modalTitle,
        modalItems,
        newModalItem,
        handleModalShow,
        handleModalClose,
        handleModalTitleChange,
        handleModalItemCheckBoxChange,
        handleModalItemInputChange,
        handleAddNewModalItem,
        mainData
    }}>{children}</KeepContext.Provider>

}
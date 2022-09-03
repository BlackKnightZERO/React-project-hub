import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
import axios from 'axios';

const KeepContext = React.createContext()

export const useKeep = () => {
    return useContext(KeepContext)
}

export const KeepProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(false)
    const [ users, setUsers ] = useState([])
    const [ currentUser, setCurrentUser ] = useState(null)
    const [ keepData, setKeepData ] = useState([])
    const [ placeHolder, setPlaceHolder ] = useState([])
    const [ activePlaceHolder, setActivePlaceHolder ] = useState(true)
    const [ search, setSearch ] = useState('')
    const [ deleteKeepItemId, setDeleteKeepItemId ] = useState([])

    const [ modalShow, setModalShow ] = useState(false)
    const [ modalId, setModalId ] = useState(null)
    const [ modalTitle, setModalTitle ] = useState('')
    const [ modalItems, setModalItems ] = useState(null)
    const [ newModalItem, setNewModalItem ] = useState('')
    const [ isNewKeep, setIsNewKeep ] = useState(false)

    const handleSelectChange = async (e) => {
        const id = e.target.value
        const name = e.target.selectedOptions[0].text

        setSearch('')

        if(!id || !name || id === '-1' || id === null || id === '') {
            setCurrentUser([])
            setKeepData([])
            setActivePlaceHolder(true)
            return
        } else {
            setCurrentUser({id, name})
            setLoading(true)
            setActivePlaceHolder(false)

            const url = `/api/keep-app/get-personalized-keeps/${id}`
            await axios.get(url)
                    .then(res => {
                        setKeepData(res.data?.data)
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            setLoading(false)
        }   

    }

    const fetchPlaceHolder = async () => {
        setLoading(true)
        const url = `/api/keep-app/get-placeholder`
        await axios.get(url)
                    .then(res=>{
                        setPlaceHolder(res.data?.data)
                    }).catch(err=>{
                        console.error(err)
                    })
        setLoading(false)
    }

    const fetchUsers = async () => {
        setLoading(true)
        const url = `/api/users`
        await axios.get(url)
                    .then(res=>{
                        setUsers(res.data?.data)
                    }).catch(err=>{
                        console.error(err)
                    })
        setLoading(false)
    }

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

    const handleModalShow = (id, title, keepItems, newKeep) => {
        setIsNewKeep( newKeep ? true : false)
        setModalId(id)
        setModalTitle(title)
        const modifiedItems = keepItems.map((item) => item.status === 0 ? {...item, status: false} : {...item, status: true})
        setModalItems(modifiedItems)
        setModalShow(true)
    }

    const storeData = async () => {
        const url = `api/keep-app/store`
        const storeData = {
            user_id: currentUser.id,
            id: modalId,
            title: modalTitle,
            slug: makeSlug(modalTitle),
            keeps: modalItems,
            deleteIds: deleteKeepItemId
        }
        await axios.post(url, storeData)
                    .then(res=>{
                        const newKeep = isNewKeep ? 
                                        [{
                                            id: res?.data?.data[0]?.id, 
                                            title: res?.data?.data[0]?.title, 
                                            slug: res?.data?.data[0]?.slug, 
                                            description: res?.data?.data[0]?.description, 
                                            keepItems: res?.data?.data[0]?.keepItems 
                                        }, ...keepData]
                                        :
                                        keepData.map( (keep) => keep.id === modalId ? {...keep, keepItems: res?.data?.data[0]?.keepItems} : keep ) 
                        setKeepData(newKeep)
                    }).catch(err=>{
                        console.error(err)
                    })
    }

    const resetModal = () => {
        setIsNewKeep(false)
        setModalShow(false)
        setModalId(null)
        setModalTitle('')
        setNewModalItem('')
        setModalItems(null)
        setDeleteKeepItemId([])   
    }

    const handleModalClose = async () => {

        if(!modalTitle) {
            if(isNewKeep) {
                if(modalItems.length > 0) {
                    if (confirm(`Do you want to save this Keep? A Title is required`)) {
                    } else {
                        resetModal()   
                    }
                } else {
                    resetModal()   
                }
            } else {
                alert('Keep Title Required')
            }
        } else {    
            await storeData()
            resetModal()
        }
    }

    const handleModalTitleChange = (e) => {
        const newTitle = e.target.value
        if(event.key === 'Enter'){

        }
        setModalTitle(newTitle)
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
        const newModalItems = modalItems.map((item) => item.id === id ? {...item, title: input, slug: makeSlug(input)} : item)
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

    const handleModalItemDelete = (id) => {
        setDeleteKeepItemId(prev => [...prev, id])
        const newModalItems = modalItems.filter(oldItem => oldItem.id !== id )
        setModalItems(newModalItems)
    }

    const handleDestroyKeep = async () => {
        if(confirm(`The current action will destroy the keep with all the items, Are you sure?`)) {
            const url = `api/keep-app/destory`
            const data = { id : modalId }
            await axios.post(url, data)
                    .then(res=>{
                        const newKeep = keepData.filter((keep) => keep.id !== modalId)
                        setKeepData(newKeep)
                        resetModal()
                    }).catch(err=>{
                        console.error(err)
                    })
        }
    }

    return <KeepContext.Provider value={{
        loading,
        users,
        currentUser,
        keepData,
        placeHolder,
        activePlaceHolder,
        search,
        modalShow,
        modalTitle,
        modalItems,
        newModalItem,
        fetchUsers,
        fetchPlaceHolder,
        setSearch,
        handleSelectChange,
        handleModalShow,
        handleModalClose,
        handleModalTitleChange,
        handleModalItemCheckBoxChange,
        handleModalItemInputChange,
        handleAddNewModalItem,
        handleModalItemDelete,
        handleDestroyKeep
    }}>{children}</KeepContext.Provider>

}
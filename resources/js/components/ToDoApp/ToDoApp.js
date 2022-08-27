import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { useEffect, useState } from 'react';

import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content"
import Footer from "./Footer"

const ToDoApp = () => {

    const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('react-project-hub-to-do-app')))

    const [ newItem, setNewItem ] = useState('')
    const [ search, setSearch ] = useState('')

    const setAndSaveItems = (updatedItems) => {
        setItems(updatedItems)
        localStorage.setItem('react-project-hub-to-do-app', JSON.stringify(updatedItems))
    }

    const addItem = (item) => {
        const id = uuidv4()
        const currentNewItem = { id, checked: false, item }
        const listItems = [...items, currentNewItem]
        setAndSaveItems(listItems)
    }
    
    const handleCheck = (id) => {
        const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item)
        setAndSaveItems(listItems)
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setAndSaveItems(listItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!newItem) return

        addItem(newItem)
        setNewItem('')
    }

    const fetchToDos = async () => {
        // setLoading(true)
        // const url = `/api/users`
        // await axios.get(url)
        //             .then(res=>{
        //                 setAllUsers(res.data?.data)
        //             }).catch(err=>{
        //                 console.error(err)
        //             })
        // setLoading(false)
    }

    useEffect(() => {
        fetchToDos()
    }, [])

    // useEffect(() => {
    //     const filteredItems = items.filter((item) => item.item.toLowerCase().includes(search))
    //     console.log(filteredItems) 
    // }, [search])

    return (
        <>
            <div className="todo-app">
                <Header title='To-Do List' />
                <SearchItem 
                    search={search}
                    setSearch={setSearch}
                />
                <AddItem 
                    newItem={newItem}
                    setNewItem={setNewItem}
                    handleSubmit={handleSubmit}
                />
                <Content 
                    items={ items.filter((item) => ( (item.item).toLowerCase() ).includes(search)) } 
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
                <Footer
                    length={items.length}
                />
            </div>
        </>
    )

}

export default ToDoApp
import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';

import Header from "./Header";
import Content from "./Content"
import Footer from "./Footer"

const ToDoApp = () => {

    const [ items, setItems ] = useState([
        {
          id: 1,
          checked: false,
          item: "Suger"
        },
        {
          id: 2,
          checked: false,
          item: "Eggs"
        },
        {
          id: 3,
          checked: false,
          item: "Cheeze"
        },
    ])
    
    const handleCheck = (id) => {
        const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item)
        setItems(listItems)
        localStorage.setItem('react-project-hub-to-do-app', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('react-project-hub-to-do-app', JSON.stringify(listItems))
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

    return (
        <>
            <div className="todo-app">
                <Header title='To-Do List' />
                <Content 
                    items={items} 
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
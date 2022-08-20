import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';

import Header from "./Header";
import Content from "./Content"
import Footer from "./Footer"

// import { Stack } from 'react-bootstrap'

const ToDoApp = () => {

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
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    )

}

export default ToDoApp
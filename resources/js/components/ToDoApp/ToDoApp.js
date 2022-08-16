import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';

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
        <></>
    )

}

export default ToDoApp
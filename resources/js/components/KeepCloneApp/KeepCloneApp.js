import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Stack, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import KeepCard from './KeepCard'
import KeepModal from './KeepModal'
import LoadingSpinner from "./LoadingSpinner";
import SelectComponent from './SelectComponent'
import SearchComponent from './SearchComponent'
import KeepCardCollection from './KeepCardCollection'

import { KeepProvider } from "./Context/KeepContext";
// import { useKeep } from "./Context/KeepContext";

const KeepCloneApp = () => {

    const [keepData, setKeepData] = useState(null)
    const [searchResults, setSearchResults] = useState(null)
    const [loading, setLoading] = useState(false)
    const [allUsers, setAllUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [dummy, setDummy] = useState(null)

    const [ users, setUsers ] = useState([])
    const [ currentUser, setCurrentUser ] = useState(null)

    //currently-not-being-used
    const placeHolderObj = [
        {
            id: -1,
            title: 'Keep',
            keepItems:[
                {id:-11, title:'Eggs', status: 1},
                {id:-12, title:'Onions', status: 1},
                {id:-13, title:'Suger', status: 0},
                {id:-14, title:'Salt', status: 1},
            ]
        },
        {
            id: -2,
            title: 'Notes',
            keepItems:[
                {id:-15, title:'Pencil', status: 1},
                {id:-16, title:'Pen X 4', status: 0},
                {id:-17, title:'Paper', status: 1},
            ]
        },
        {
            id: -3,
            title: 'Organized',
            keepItems:[
                {id:-18, title:'Learn Italian cooking', status: 0},
                {id:-19, title:'Meditation', status: 1},
                {id:-20, title:'Call a frield', status: 1},
            ]
        },
    ]

    const handleSelectChange = async (e) => {
        const id = e.target.value
        const name = e.target.selectedOptions[0].text

        if(!id && !name) {
            setCurrentUser(null)
        } else {
            setCurrentUser({id, name})
        }

        if(id === '-1' || id === null || id === '') {
            setKeepData(null)
            setSearchResults(null)
            return
        }    
        setLoading(true)
        const url = `/api/keep-app/get-personalized-keeps/${id}`
        console.log(url)
        await axios.get(url)
                .then(res => {
                    setKeepData(res.data?.data)
                    return res
                })
                .then(res => {
                    setSearchResults(res.data?.data)
                })
                .catch(err=>{
                    console.error(err)
                })
        setLoading(false)

    }

    const handleSearchChange = (e) => {
        const value = e.target.value
        if(!value) {
            setSearchResults( keepData )
        } else {
            const filteredKeeps = keepData.filter((m) => m.title.includes(value) || m.keepItems.some((f) => f.title.includes(value)))
            setSearchResults(filteredKeeps)
        }
        console.log(searchResults)
    }

    // const {modalShow} = useKeep()

    const fetchPlaceHolder = async () => {
        setLoading(true)
        const url = `/api/keep-app/get-placeholder`
        await axios.get(url)
                    .then(res=>{
                        setDummy(res.data?.data)
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
                        setAllUsers(res.data?.data)
                        setUsers(res.data?.data)
                    }).catch(err=>{
                        console.error(err)
                    })
        setLoading(false)
    }

    useEffect(() => {
        fetchPlaceHolder()
        fetchUsers()
    }, [])

    return (
        <>
            <KeepProvider>
                <div className="bg-white">
                    {
                        loading ? (
                            <Container>
                                <Row className="m-3 d-flex justify-content-center">
                                    <LoadingSpinner />
                                </Row>
                            </Container>
                        ) : (
                            <Container>
                                <Row className="m-3 col-md-3 mx-auto">
                                    <SelectComponent 
                                        users={users}
                                        handleSelectChange={handleSelectChange}
                                    />
                                </Row>
                                {
                                    keepData ? (
                                        <Row className="m-3 col-md-3 mx-auto">
                                            <SearchComponent 
                                                handleSearchChange={handleSearchChange}
                                            />
                                        </Row>
                                    ) : null
                                }

                                {/* <Row className="m-3 col-md-9 mx-auto">
                                    <KeepCardCollection />
                                </Row> */}
                                
                                <Row className="m-3 col-md-9 mx-auto">
                                    {
                                        keepData ? 
                                        searchResults.length > 0 ? 
                                        searchResults && searchResults.map(
                                            (keep) => (
                                                <Col key={keep.id} xs={12} sm={6} md={4} className="mb-4">
                                                    <div className="keep-app-sticker-div" >
                                                        <KeepCard
                                                            id={keep.id}
                                                            title={keep.title}
                                                            keepItems={keep.keepItems}
                                                        />
                                                    </div>
                                                </Col>
                                            )) : <><h4>No Items Found</h4></> : (
                                                dummy && dummy.map(
                                                    (placeholder) => (
                                                        <Col key={placeholder.id} xs={12} sm={6} md={4} className="mb-4">
                                                            <div className="keep-app-sticker-div" >
                                                                <KeepCard
                                                                    id={placeholder.id}
                                                                    title={placeholder.title}
                                                                    keepItems={placeholder.keepItems}
                                                                    dismissed
                                                                />
                                                            </div>
                                                        </Col>
                                                    )
                                                )
                                            )

                                    }
                                </Row>
                            </Container> 
                        )
                    }       
                </div>     
                <KeepModal/>
            </KeepProvider>
        </>       
    )

}

export default KeepCloneApp
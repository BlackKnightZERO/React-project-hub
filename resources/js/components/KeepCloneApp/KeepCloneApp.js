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

    const [ loading, setLoading ] = useState(false)
    const [ users, setUsers ] = useState([])
    const [ currentUser, setCurrentUser ] = useState(null)
    const [ keepData, setKeepData ] = useState([])
    const [ placeHolder, setPlaceHolder ] = useState([])
    const [ activePlaceHolder, setActivePlaceHolder ] = useState(true)
    const [ search, setSearch ] = useState('')

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
                                        currentUser={currentUser}
                                    />
                                </Row>
                                {
                                    keepData ? (
                                        <Row className="m-3 col-md-3 mx-auto">
                                            <SearchComponent 
                                                search={search}
                                                setSearch={setSearch}
                                            />
                                        </Row>
                                    ) : null
                                }
                                {
                                    currentUser && !activePlaceHolder ? (
                                        <>
                                            <Row className="m-3 d-flex justify-content-center">
                                                <h2 className="text-center text-primary fw-bold">{`${currentUser?.name}'s keeps`}</h2>
                                            </Row>
                                        </>
                                    ) : null
                                }
                                <Row className="m-3 col-md-9 mx-auto">
                                    <KeepCardCollection 
                                        keepData={ keepData.filter((keep) => keep.title.includes(search) || keep.keepItems.some((leastOne) => leastOne.title.includes(search))) }
                                        placeHolder={placeHolder}
                                        activePlaceHolder={activePlaceHolder}
                                    />
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
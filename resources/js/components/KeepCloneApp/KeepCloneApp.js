import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Stack, Container, Row, Col, Card, Button, Spinner, Form } from 'react-bootstrap';
import KeepCard from './KeepCard'
import KeepModal from './KeepModal'
import { KeepProvider } from "./Context/KeepContext";
// import { useKeep } from "./Context/KeepContext";

const KeepCloneApp = () => {

    const [keepData, setKeepData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [allUsers, setAllUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)

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
                {id:-18, title:'Learn French cooking', status: 0},
                {id:-19, title:'Meditation', status: 1},
                {id:-20, title:'Call a frield', status: 1},
            ]
        },
    ]

    const handleSelectChange = async (e) => {
        const id = e.target.value
        if(id === '-1' || id === null || id === '') {
            setKeepData(null)
            return
        }    
        setLoading(true)
        const url = `/api/keep-app/get-personalized-keeps/${id}`
        console.log(url)
        await axios.get(url)
                .then(res=>{
                    setKeepData(res.data?.data)
                    console.log(res)
                }).catch(err=>{
                    console.error(err)
                })
        setLoading(false)

    }

    // const {modalShow} = useKeep()

    const fetchUsers = async () => {
        setLoading(true)
        const url = `/api/users`
        await axios.get(url)
                    .then(res=>{
                        setAllUsers(res.data?.data)
                    }).catch(err=>{
                        console.error(err)
                    })
        setLoading(false)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <KeepProvider>
                <div className="bg-white">
                    <Container>
                        <Row className="m-3 col-md-3 mx-auto">
                            <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
                                <option value="-1">Select User</option>
                                {
                                    allUsers && allUsers.map(
                                        (user) => (<option key={user.name} value={user.id}>{ user.name }</option>)
                                    )
                                }
                            </Form.Select>
                        </Row>
                        <Row className="m-3 col-md-9 mx-auto">
                            {
                                keepData ? 
                                keepData && keepData.map(
                                    (keep) => (
                                        <Col key={keep.id} xs={12} sm={6} md={4} className="mb-4">
                                            <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }} >
                                                <KeepCard
                                                    id={keep.id}
                                                    title={keep.title}
                                                    keepItems={keep.keepItems}
                                                />
                                            </div>
                                        </Col>
                                    )) : (
                                        placeHolderObj && placeHolderObj.map(
                                            (placeholder) => (
                                                <Col key={placeholder.id} xs={12} sm={6} md={4} className="mb-4">
                                                    <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }} >
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
                </div>     
                <KeepModal/>
            </KeepProvider>
        </>       
    )

}

export default KeepCloneApp
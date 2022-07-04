import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Stack, Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import KeepCard from './KeepCard'
import KeepModal from './KeepModal'
import { KeepProvider } from "./Context/KeepContext";
// import { useKeep } from "./Context/KeepContext";

const KeepCloneApp = () => {

    const [keepData, setKeepData] = useState([])
    const [loading, setLoading] = useState(false)

    // const {modalShow} = useKeep()

    const fetchData = async () => {
        setLoading(true)
        // const url = `/api/keep-app/get-personalized-keeps`
        await axios.get(url)
                .then(res=>{
                    // setKeepData(res.data?.data)
                }).catch(err=>{
                    console.error(err)
                })
        setLoading(false)
    }

    useEffect(() => {
        // fetchData()
    }, [])

    return (
        <>
            <KeepProvider>
                <div className="bg-white">
                    <Container>
                        <Row className="m-3 col-md-9 mx-auto">
                            <Col xs={12} sm={6} md={4}>
                                <div style={{ cursor: 'pointer' }} >
                                    <KeepCard 
                                        title="first list"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>        
                </div>     
                <KeepModal/>
            </KeepProvider>
        </>       
    )

}

export default KeepCloneApp
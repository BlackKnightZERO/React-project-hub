import { useEffect } from 'react';

import { Container, Row } from 'react-bootstrap';
import LoadingSpinner from "./LoadingSpinner";
import AddButton from "./AddButton";
import SelectComponent from './SelectComponent'
import SearchComponent from './SearchComponent'
import KeepCardCollection from './KeepCardCollection'

import { useKeep } from './Context/KeepContext'

const KeepContainer = () => {

    const { loading, keepData, users, handleSelectChange, currentUser, search, setSearch, activePlaceHolder, fetchPlaceHolder, fetchUsers, placeHolder } = useKeep()

    useEffect(() => {
      fetchPlaceHolder()
      fetchUsers()
    }, [])

    return (
      <>
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
                            keepData.length ? (
                                <Row className="m-3 col-md-3 mx-auto">
                                    <SearchComponent 
                                        search={search}
                                        setSearch={setSearch}
                                    />
                                </Row>
                            ) : null
                        }
                        {
                            !activePlaceHolder ? (
                                <>
                                    <Row className="m-3 d-flex justify-content-center">
                                        <h2 className="text-center text-primary fw-bold">{`${currentUser?.name}'s keeps`}</h2>
                                    </Row>
                                </>
                            ) : null
                        }
                        <Row className="m-3 col-md-9 mx-auto">
                            <KeepCardCollection 
                                keepData={ keepData.filter((keep) => keep.title.toLowerCase().includes(search.toLowerCase()) || keep.keepItems.some((leastOne) => leastOne.title.toLowerCase().includes(search.toLowerCase()))) }
                                placeHolder={placeHolder}
                                activePlaceHolder={activePlaceHolder}
                            />
                        </Row>
                    </Container> 
                )
            }       
        </div> 
        {
            !activePlaceHolder ? (
                <AddButton />    
            ) : null
        }
      </>
    )
}

export default KeepContainer
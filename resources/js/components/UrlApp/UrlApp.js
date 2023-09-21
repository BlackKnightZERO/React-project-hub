import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
const UrlApp = () => {

    const DEFAULT_ITEMS =["Computer", "Book", "Bike", "Keyboard", "Cup", "Mouse"]
    
    const [searchParams, setSearchParams] = useSearchParams({ q: "", onlyComputerItems: false })
    const q = searchParams.get("q")
    const onlyComputerItems = searchParams.get("onlyComputerItems") === "true"

    const items = DEFAULT_ITEMS.filter(f => {
        return (
                f.toLowerCase().includes(q.toLowerCase()) 
                && (!onlyComputerItems 
                    || (onlyComputerItems 
                            && (f === "Computer" || f === "Keyboard" || f === "Mouse")
                        )
                    )
                ) 
        })

    return (
        <div className='UrlApp'>
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="mt-3">
                        <h1>Store</h1>
                        <div>
                            <label htmlFor="q">Title</label>
                            &nbsp;
                            <input 
                                type="text" 
                                id="q"
                                defaultValue={ q }
                                onChange={ e => setSearchParams(prev => {
                                    prev.set("q", e.target.value)
                                    return prev
                                    }, { replace: true })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="onlyComputerItems">Only Computer Items</label>
                            &nbsp;
                            <input 
                                type="checkbox" 
                                id="onlyComputerItems"
                                checked={ onlyComputerItems }
                                onChange={ e => setSearchParams(prev => {
                                    prev.set("onlyComputerItems", e.target.checked)
                                    return prev
                                    }, { replace: true })
                                }
                            />
                        </div>
                        <br />
                        <ul>
                            {
                                items.map((item, i) => (
                                    <li key={i}>{ item }</li>
                                ))
                            }
                        </ul>
                    </Col>
                <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default UrlApp
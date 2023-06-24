import React, { useState } from 'react';
import { Stack, Container, Row, Col, Button } from 'react-bootstrap';

const CounterApp = () => {

    const [current, setCurrent] = useState(0);
    const [queueLines, setQueueLines] = useState([[6,7,8],[1],[],[3],[4]]);

    const addToQueue = (e) => {
        e.preventDefault()

        let lowestInQueue = 1e9;
        let queueWithLeast;

        for(let queueLine of queueLines) {
            const totalInQueue = queueLine.reduce((sum, value) => sum + value, 0)
            if(totalInQueue < lowestInQueue) {
                lowestInQueue = totalInQueue
                queueWithLeast = queueLine
            }
        }
        console.log(queueWithLeast)
    }
    
    return (
        <div>
            <form onSubmit={addToQueue}>
                <Stack gap={2} className="col-md-4 mx-auto mt-4">
                <input type="number" min="0" value={current} onChange={ (e) => setCurrent( ( e.target.value >= 0) ? e.currentTarget.valueAsNumber : 0 ) } />
                    <Button variant="outline-secondary" type='submit'>Checkout</Button>
                </Stack>
            </form>

            <Stack className="col-md-4 mx-auto mt-5" direction="horizontal" gap={3}>
                {
                    queueLines.map((queueLine, i) => (
                        <div className="p-3 ms-auto border border-secondary" key={i}>X</div>
                    ))
                }
            </Stack>
        </div>
    );
};

export default CounterApp;
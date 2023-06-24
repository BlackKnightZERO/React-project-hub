import React, { useEffect, useState } from 'react';
import { Stack, Button } from 'react-bootstrap';

const CounterApp = () => {

    const [current, setCurrent] = useState(0);
    const [queueLines, setQueueLines] = useState([[6,7,8],[1,3,6,8],[22],[13],[4]]);

    const addToQueue = (e) => {
        e.preventDefault()

        let lowestInQueue = 1e9;
        let queueWithLeast = [];

        for(let queueLine of queueLines) {
            const totalInQueue = queueLine.reduce((sum, value) => sum + value, 0)
            if(totalInQueue < lowestInQueue) {
                lowestInQueue = totalInQueue
                queueWithLeast = queueLine
            }
        }

        if(current <= 0 || !queueWithLeast) return
        setQueueLines(prevQueue => 
            prevQueue.map(queue =>
                queue === queueWithLeast ? [...queue, current] : queue 
                )
            )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setQueueLines( prevLines =>
                prevLines.map( queueLine => 
                    [queueLine[0] - 1, ...queueLine.splice(1)].filter(f => f > 0) 
                )
            )
        }, 1500)
        return () => {
            clearInterval(interval)
        }
    }, [])
    
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
                    queueLines.map((queueLine, i1) => (
                        <div className="p-3 ms-auto border border-secondary line" key={i1}>
                            {
                                queueLine.map((q, i2) => (<div key={i2}>{q}</div>))
                            }
                        </div>
                    ))
                }
            </Stack>
        </div>
    );
};

export default CounterApp;
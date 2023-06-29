import React, { useState } from 'react'

const CircleUndoRedoApp = () => {

    const [clientStack1, setClientStack1] = useState([]);
    const [clientStack2, setClientStack2] = useState([]);

    const makeCircle = (e) => {
        const {clientX, clientY} = e;
        setClientStack1((prev) => [...prev, {x: clientX, y: clientY}])
    }

    const undoCircle = () => {
        console.log('undo')
        if(clientStack1.length < 1) return
        setClientStack2(prev => [...prev, clientStack1.pop()])
    }

    const redoCircle = () => {
        console.log('redo')
        if(clientStack2.length < 1) return
        setClientStack1(prev => [...prev, clientStack2.pop()])
    }

  return <div className="circle-undo-redo-app">
                <div className='circle-app-btn-group'>
                    <button onClick={ undoCircle } disabled={clientStack1.length < 1}>Undo</button>
                    <button onClick={ redoCircle } disabled={clientStack2.length < 1}>Redo</button>
                </div>
                <div className='circle-app-panel' onClick={ (e) => makeCircle(e) }>
                    {
                        clientStack1.map( (m, i) => (<div className='circle' key={i} style={{ position: 'absolute', top: m.y - 200, left: m.x - 5 }}></div>))
                    }
                </div>
        </div>
}

export default CircleUndoRedoApp
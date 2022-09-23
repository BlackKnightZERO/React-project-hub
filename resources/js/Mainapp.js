import { React, StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Layout/Header';
import Landing from './components/Landing/Landing';
import BirthdayApp from './components/BirthdayApp/BirthdayApp'
import KeepCloneApp from './components/KeepCloneApp/KeepCloneApp'
import ToDoApp from './components/ToDoApp/ToDoApp'
import ColorApp from './components/ColorApp/ColorApp'
import CryptoAp from './components/CryptoApp/CryptoApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Mainapp = () => {
    return (
        <>  
            <Header />
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/birthday-app" element={<BirthdayApp />} />
                <Route exact path="/keep-app" element={<KeepCloneApp />} />
                <Route exact path="/todo-app" element={<ToDoApp />} />
                <Route exact path="/color-app" element={<ColorApp />} />
                <Route exact path="/crypto-app" element={<CryptoAp />} />
            </Routes>
        </>
    )
}

export default Mainapp;

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    // <StrictMode>                                                                 // useEffect runs twice problem
      <BrowserRouter>
        <Mainapp />
      </BrowserRouter>
    // </StrictMode>
);
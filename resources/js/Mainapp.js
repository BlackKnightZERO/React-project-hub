import { React, StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Layout/Header';
import Landing from './components/Landing/Landing';
import FirstComponent from './components/FirstComponent/FirstComponent';
import BirthdayApp from './components/BirthdayApp/BirthdayApp'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Mainapp = () => {
    return (
        <>  
            <Header />
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/first" element={<FirstComponent />} />
                <Route exact path="/birthday-app" element={<BirthdayApp />} />
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
import { React, StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Stack, Container, Row, Col, Card, Button } from 'react-bootstrap';

import Header from './components/Layout/Header';
import Landing from './components/Landing/Landing';
import FirstComponent from './components/FirstComponent/FirstComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Mainapp = () => {
    return (
        <>  
            <Header />

            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/first" element={<FirstComponent />} />
            </Routes>
        </>
    )
}

export default Mainapp;

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <BrowserRouter>
        <Mainapp />
      </BrowserRouter>
    </StrictMode>
);
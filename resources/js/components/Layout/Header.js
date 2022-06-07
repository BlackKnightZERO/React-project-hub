import React from "react";
import { Link, useLocation } from "react-router-dom";
import {  Button } from 'react-bootstrap';

export default function() {
    const location = useLocation();
    const currentURL = location.pathname
    const title = (currentURL==='/') ? `React Projects Compilation` : currentURL.slice(1).toUpperCase()
    return (
        <>
            <div className="bg-dark text-white text-center p-5">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h1 id="app_title">{ title }</h1>
                </Link>
                {
                    ( location.pathname !== '/' ) 
                    ? (
                        <Link to="/">
                            <Button variant="secondary" className="mt-2">Go back</Button>
                        </Link>
                    ) : ''
                }
            </div>
        </>
    )
}
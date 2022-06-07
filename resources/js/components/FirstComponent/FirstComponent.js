import React from "react";
import './style.css'
import Header from "../Layout/Header";

const FirstComponent = () => {
    return (
        <>

            <h2>First Component</h2>
            <h2>Card</h2>

            <div className="card">
                <img src="https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg" alt="Avatar" />
                <div className="container">
                    <h4><b>Chris Dafoe</b></h4> 
                    <p>Architect & Engineer</p> 
                </div>
            </div>
        </>
    )
}

export default FirstComponent
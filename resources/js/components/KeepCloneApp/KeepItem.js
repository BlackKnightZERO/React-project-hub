import React from "react";
import { Form } from 'react-bootstrap';

const KeepItem = ( {item, handleCheckboxChange, handleInputChange} ) => {

    // const handleCheckboxChange = (e) => {
    //     console.log(e)
    // }
    // const handleInputChange = (e) => {
    //     console.log(e)
    // }

    return (
        <>
            <li>
                <Form.Check 
                    type="checkbox" 
                    className="keep-app-checkbox" 
                    checked={item.status} 
                    onChange={ handleCheckboxChange }
                />
                <input type="text" 
                    placeholder='+ List item'
                    className="keep-app-item-input"
                    value={item.title}
                    onChange={ handleInputChange }
                />
            </li>
        </>
    )

}

export default KeepItem

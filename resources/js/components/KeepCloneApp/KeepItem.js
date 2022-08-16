import React from "react";
import { Form } from 'react-bootstrap';

const KeepItem = ( {item} ) => {

    return (
        <>
            <li>
                <Form.Check 
                    type="checkbox" 
                    className="keep-app-checkbox" 
                    checked={item.status} 
                />
                <input type="text" 
                    placeholder='+ List item'
                    className="keep-app-item-input"
                    value={item.title}
                />
            </li>
        </>
    )

}

export default KeepItem

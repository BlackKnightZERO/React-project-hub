import React from "react";
import { Form } from 'react-bootstrap';

const KeepItem = ({item}) => {

    return (
        <>
            <li style={{ color: '#201f1e' }} >
                {/* <Form.Check 
                    type="checkbox" 
                    className="keep-app-checkbox" 
                    checked={item.status} 
                />
                <input type="text" 
                    placeholder='+ List item'
                    onChange={handleInputChange}
                    onKeyPress={handleEnterKeyPress}
                    style={{ display:'inline-block', width: '90%', outline: 'none', border: 'none', paddingLeft:'6%' }} 
                />       */}
                <input type="text" 
                    placeholder='+ List item'
                    value={item.title}
                />
            </li>
        </>
    )

}

export default KeepItem

import { FaTrashAlt } from "react-icons/fa";
import { Form } from 'react-bootstrap';
import { useKeep } from './Context/KeepContext'

const KeepItem = ({ item }) => {

    const { handleModalItemCheckBoxChange, handleModalItemInputChange } = useKeep()

    return (
        <>
            <li>
                <Form.Check 
                    type="checkbox" 
                    className="keep-app-checkbox"
                    checked={ item.status } 
                    onChange={ (e) => handleModalItemCheckBoxChange(e, item.id) }
                />
                <input type="text" 
                    placeholder='+ List item'
                    className="keep-app-item-input"
                    value={ item.title }
                    onChange={ (e) => handleModalItemInputChange(e, item.id) }
                />
                <FaTrashAlt />
            </li>
        </>
    )

}

export default KeepItem

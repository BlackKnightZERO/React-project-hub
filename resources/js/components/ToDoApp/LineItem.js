import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
        <li className="todo-app-item">
            <input type="checkbox"
                checked={item.checked}
                onChange={ () => handleCheck(item.id) }
            />
            <label
                style={ (item.checked) ? { textDecoration: 'line-through' } : null }
                onDoubleClick={ () => handleCheck(item.id) }
            >{item.item}</label>
            <FaTrashAlt 
                onClick={ () => handleDelete(item.id) }
                role='button' 
                tabIndex='0'
                title={`Delete ${item.item}`}
                aria-label={`Delete ${item.item}`}
            />
        </li>
  )
}

export default LineItem
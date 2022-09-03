import { FaPlus } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import { useKeep } from './Context/KeepContext'

const AddButton = () => {
  const { handleModalShow } = useKeep()

  return (
    <button 
      className="todo-app-addNewKeepBtn"
      role="button"
      tabIndex="3"
      title="Add New Keep"
      aria-label="Add New Keep"
      onClick={ () => handleModalShow(uuidv4(), '', [], true)}  
    >
        <FaPlus 
        />
    </button>
  )
}

export default AddButton
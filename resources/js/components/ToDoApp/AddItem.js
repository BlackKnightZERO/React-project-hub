import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  
  const inputRef = useRef()
  
  return (
    <form className="todo-app-addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            id="addItem"
            type="text"
            placeholder="Add Item"
            required
            value={newItem}
            onChange={ (e) => setNewItem(e.target.value) }
        />
        <button
            className="todo-app-addBtn"
            type="submit"
            title="Add Item"
            aria-label="Add Item"
            onClick={ () => inputRef.current.focus() }
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
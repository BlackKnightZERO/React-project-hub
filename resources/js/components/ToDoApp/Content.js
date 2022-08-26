import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {

  const [ items, setItems ] = useState([
    {
      id: 1,
      checked: false,
      item: "Suger"
    },
    {
      id: 2,
      checked: false,
      item: "Eggs"
    },
    {
      id: 3,
      checked: false,
      item: "Cheeze"
    },
  ])

  const handleCheck = (id) => {
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('react-project-hub-to-do-app', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('react-project-hub-to-do-app', JSON.stringify(listItems))
  }

  return (
    <main className='todo-app-main'>
      {
        items.length ? (
          <ul className="todo-app-ul">
            {
              items && items.map(
                (item) => (
                    <li className="todo-app-item" key={item.id}>
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
                      />
                    </li>
                )
              )
            }
          </ul>
        ) : (
          <p style={{ marginTop: '2rem' }}>Your List is empty</p>
        )
      }
    </main>
  )
}

export default Content
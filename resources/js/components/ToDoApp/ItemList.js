import LineItem from './LineItem'

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="todo-app-ul">
        {
            items && items.map(
                (item) => (
                    <LineItem 
                        key={item.id}
                        item={item}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                )
            )
        }
    </ul>
  )
}

export default ItemList
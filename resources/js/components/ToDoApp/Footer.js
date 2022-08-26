import React from 'react'

const Footer = ({length}) => {

  // const today = new Date()

  return (
    <footer className='todo-app-footer'>
      <p>{length} List { length === 1 ? "item" : "items"}</p>
        {/* <p>copyright &copy; {today.getFullYear()}</p> */}
    </footer>
  )
}

export default Footer
import React from 'react'
import { useKeep } from './Context/KeepContext'

const KeepContainer = () => {

    const { mainData } = useKeep()

  return (
    <div>KeepContainer</div>
  )
}

export default KeepContainer
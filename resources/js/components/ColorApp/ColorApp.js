import { useState } from "react"

import Input from "./Input"
import Square from "./Square"

const ColorApp = () => {
  
  const [ colorValue, setColorValue ] = useState('magenta')
  const [ hexValue, setHexValue ] = useState('#FF00FF')
  const [ isDarkText, setIsDarkText ] = useState(true)

  return (
    <div className="color-app">
        <Square 
            colorValue={colorValue}
            hexValue={hexValue}
            isDarkText={isDarkText}
        />
        <Input 
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
        />
    </div>
  )
}

export default ColorApp
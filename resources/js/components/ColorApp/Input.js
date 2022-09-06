import colorNames from 'colornames'

const Input = ({ 
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form 
        className="color-app-form"
        onSubmit={ (e) => e.preventDefault() }
    >
        <label className="color-app-label">Add Color Name:</label>
        <input 
            autoFocus
            type="text"
            placeholder="Add Color Name"
            required
            value={colorValue}
            onChange={ (e) => {
                setColorValue(e.target.value)
                setHexValue( colorNames(e.target.value) )
            }}
        />
        <button
            type="button"
            onClick={ () => setIsDarkText(!isDarkText) }
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input
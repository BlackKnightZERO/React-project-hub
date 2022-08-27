import { Form } from 'react-bootstrap';

const SearchComponent = ({ handleSearchChange }) => {
  return (
    <Form onSubmit={ (e) => e.preventDefault() }>
        <Form.Control 
            type="text" 
            placeholder="Search..." 
            onChange={ handleSearchChange }    
        />
    </Form>
  )
}

export default SearchComponent
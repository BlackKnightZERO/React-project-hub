import { Form } from 'react-bootstrap';

const SearchComponent = ({ search, setSearch }) => {
  return (
    <Form onSubmit={ (e) => e.preventDefault() }>
        <Form.Control 
            type="text" 
            placeholder="Search..."
            value={search}
            onChange={ (e) => setSearch(e.target.value) }    
            tabIndex="2"
        />
    </Form>
  )
}

export default SearchComponent
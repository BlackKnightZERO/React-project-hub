import { Form } from 'react-bootstrap';

const SelectComponent = ({ users, currentUser, handleSelectChange }) => {
  return (
    <Form onSubmit={ (e) => e.preventDefault() }>
        <Form.Select aria-label="Default select example"
          value={currentUser?.id}
          onChange={handleSelectChange}
          tabIndex="1"
        >
            <option value="-1">Select User</option>
            {
                users && users.map(
                    (user) => (<option key={user.name} value={user.id}>{ user.name }</option>)
                )
            }
        </Form.Select>
    </Form>
  )
}

export default SelectComponent
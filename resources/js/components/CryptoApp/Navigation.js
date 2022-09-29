import { Navbar, NavDropdown, Form, Container, Nav, Button } from 'react-bootstrap'
import { FaCog } from "react-icons/fa";

import { useCrypto } from './Context/CryptoContext'

const Navigation = () => {

  const { setShowModal } = useCrypto()

  return (
    <Navbar expand="lg" style={{ background: '#000' }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to='/crypto-app' style={{ color: '#fff', fontWeight: '600' }}>Coins</Nav.Link>
            <Nav.Link to='/crypto-app-excahnge' style={{ color: '#fff', fontWeight: '600' }}>Exchange</Nav.Link>
          </Nav>
               <Nav.Item className='ms-auto'>
           <Nav.Link onClick={ () => setShowModal(true) } >
             <FaCog style={{ color: '#fff' }} />
           </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Button variant="info" style={{ color: '#fff', borderRadius: '5px', fontWeight: '600' }}>Connect Wallet</Button>
         </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
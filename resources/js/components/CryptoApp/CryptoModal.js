import { Modal } from 'react-bootstrap'

const CryptoModal = ({ showModal, setShowModal, modalFullScreen }) => {
    
  return (
    <>
      <Modal show={showModal} fullscreen={modalFullScreen} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Modal body content
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CryptoModal
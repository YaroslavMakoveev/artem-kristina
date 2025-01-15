import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RSVPForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="RSVPForm">
      <button className='confirm_button' onClick={handleShow}>
        Подтвердить присутствие
      </button>

      <Modal show={show} onHide={handleClose} style={{marginTop: '15vw'}}>
        <Modal.Header closeButton>
          <Modal.Title>Подтверждение присутствия</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfmLorwoWcxAZ68RKqIWk4g77ERqBn8kYDgGeRGDQGr_NxpQg/viewform?usp=header"
            width="100%"
            height="480"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="RSVP Form"
          >
            Загрузка…
          </iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RSVPForm;

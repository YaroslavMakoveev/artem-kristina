import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

const RSVPForm = () => {
  const [show, setShow] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация будет выполнена только один раз
    threshold: 0.8 // Анимация начнется, когда элемент будет виден на 40%
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="RSVPForm">
      <button
        className={`confirm_button ${inView ? 'animate' : ''}`}
        onClick={handleShow}
        style={{ color: 'black' }}
        ref={ref}
      >
        Подтвердить присутствие
      </button>

      <Modal show={show} onHide={handleClose} style={{ marginTop: '15vw' }}>
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

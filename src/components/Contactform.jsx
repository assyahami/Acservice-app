import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GrLocation } from 'react-icons/gr';
import { RiCustomerService2Fill, Ri24HoursLine } from 'react-icons/ri';
import client from '../Client';
import { Stack, Form, InputGroup } from 'react-bootstrap';

function ContactUs({ show, setShow }) {
  const [FormDb, setFormDb] = useState({
    name: '',
    email: '',
    phoneno: '',
    workneeded: '',
    location: '',
    message: '',
  });
  const [validate, setValidate] = useState(false);
  const handlesubmit = async (e) => {
    const { name, email, phoneno, workneeded, location, message } = FormDb;
    e.preventDefault();
    // let match=/\r|\n/.exec(message)
    if (
      name !== '' &&
      email !== '' &&
      phoneno !== '' &&
      workneeded !== '' &&
      location !== ''
    ) {
      let userdoc = {
        _type: 'contactform',
        _id: Date.now(),
        name: name,
        email: email,
        mobileno: phoneno,
        reason: workneeded,
        message: message,
        location: location,
      };
      await client.create(userdoc);
    setFormDb({
      ...FormDb,
    name: '',
    email: '',
    phoneno: '',
    workneeded: '',
    location: '',
    message: '',
  })
    setValidate(false);
    handleClose()
    alert('Your form successfully submmited')
    }
    setValidate(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        id="modal-content"
        show={show}
        onHide={handleClose}
        animation={true}
        centered
        keyboard={false}
        backdrop="static"
        contentClassName="my-modal"
      >
        <Form onSubmit={handlesubmit} noValidate validated={validate}>
          <Modal.Header closeButton className="bg-light shadow">
            <Modal.Title>Contact us</Modal.Title>
            <Ri24HoursLine fontSize={'2rem'} color={'steelblue'} />
          </Modal.Header>
          <Modal.Body>
            <Stack className={'bg-light'}>
              <div className="">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={FormDb.name}
                  required
                  onChange={(e) =>
                    setFormDb({ ...FormDb, name: e.target.value })
                  }
                  type={'text'}
                ></Form.Control>
              </div>
              <div className="">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type={'text'}
                  value={FormDb.email}
                  onChange={(e) =>
                    setFormDb({ ...FormDb, email: e.target.value })
                  }
                ></Form.Control>
              </div>
              <div className="">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type={'text'}
                  required
                  value={FormDb.phoneno}
                  onChange={(e) =>
                    setFormDb({ ...FormDb, phoneno: e.target.value })
                  }
                ></Form.Control>
              </div>

              <div className="">
                <Form.Label>Location</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <GrLocation />
                  </InputGroup.Text>
                  <Form.Control
                    type={'text'}
                    required
                    value={FormDb.location}
                    onChange={(e) =>
                      setFormDb({ ...FormDb, location: e.target.value })
                    }
                    placeholder={'Give a Address for our service'}
                  ></Form.Control>
                </InputGroup>
              </div>
              <Form.Group className="d-grid">
                <strong>Reason for Appointment?</strong>
                <Form.Control
                  rows={4}
                  required
                  as={'textarea'}
                  value={FormDb.workneeded}
                  onChange={(e) =>
                    setFormDb({
                      ...FormDb,
                      workneeded: e.target.value.replace('/[\r\n]/gm', ''),
                    })
                  }
                ></Form.Control>
              </Form.Group>
              <div className="d-grid">
                <strong>Message</strong>
                <textarea
                  rows={4}
                  value={FormDb.message}
                  onChange={(e) =>
                    setFormDb({ ...FormDb, message: e.target.value })
                  }
                ></textarea>
              </div>
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex me-auto justify-content-start align-items-center gap-2">
              <strong className="">CustomerCare </strong>
              <RiCustomerService2Fill />
              <span
                className="text-primary fw-bold d-flex justify-content-around align-items-center"
                style={{ cursor: 'pointer' }}
              >
                7639950620
              </span>
            </div>

            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type={'submit'}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ContactUs;

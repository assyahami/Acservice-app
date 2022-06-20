import React, { useState, useEffect } from 'react';
import Header from './header';
import Contactform from './Contactform';
import { FcServices, FcOvertime } from 'react-icons/fc';
import { FaPhoenixFramework, FaArrowRight } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import {
  Card,
  Stack,
  Button,
  InputGroup,
  Tabs,
  Tab,
  Form,
  CardImg,
  Navbar,
  Container,
  ProgressBar,
} from 'react-bootstrap';
import { Formcontext, useGlobalcontext } from '../context/formcontext';
const JuctionBookComponent = ({ show, setShow }) => {
  return (
    <Formcontext>
      <Header show={show} setShow={setShow} />
      <Contactform show={show} setShow={setShow} />
      <Booking />
    </Formcontext>
  );
};
function Booking() {
  const [Key, setKey] = useState('Service Details');
  const [Pval, setPval] = useState(0);
  const { formdb } = useGlobalcontext();
  useEffect(() => {
    const handleprogress = () => {
      if (Key === 'Service Details') {
        return setPval(0);
      }
      if (Key === 'Date&Time') {
        return setPval(40);
      }
      if (Key === 'location') {
        return setPval(70);
      }
      if (Key === 'Submiited Application') {
        return setPval(100);
      }
    };
    handleprogress();
  }, [Key]);
  return (
    <>
      <Stack className="mt-5 " id="bookingform">
        <div>
          <div className="text-center mt-5">
            <h2 className="bookingtile">{Key}</h2>
          </div>
          <div>
            <div className="">
              <ProgressBar now={Pval} id="progresstimeline" />
            </div>
            <Tabs
              activeKey={Key}
              onSelect={(k) => setKey(k)}
              className="d-flex justify-content-around aligns-items-center"
              id="uncontrolled-tap"
            >
              <Tab eventKey={'Service Details'} title={<FcServices />}>
                <div className="d-flex shadow-lg justify-content-center  aligns-items-center  flex-column">
                  <Services />
                </div>
              </Tab>
              <Tab
                eventKey={'Date&Time'}
                title={<FcOvertime />}
                className="w-100"
              >
                <div className="w-75">
                  <DateTime />
                </div>
              </Tab>
              <Tab
                eventKey={'location'}
                title={<GrLocation style={{ color: 'skyblue !important' }} />}
                disabled={formdb.errcheck}
              >
                <Location />
              </Tab>
              <Tab
                eventKey={'Submiited Application'}
                title={<FaPhoenixFramework />}
                disabled={true}
              >
                <SuccessFully />
              </Tab>
            </Tabs>
          </div>
        </div>
      </Stack>
      <FormFooter Key={Key} setKey={setKey} setPval={setPval} />
    </>
  );
}

const Services = () => {
  const { Cleaningweek, btnval, setBtnval, setCleaningweek } =
    useGlobalcontext();
  const handleform = (event) => {
    setCleaningweek(event.target.value);
  };

  return (
    <div className="m-3 ">
      <Form>
        <HomeService />
        <Form.Group className="d-grid m-3">
          <strong>How many cleaners do you need?</strong>
          <div className="d-flex mt-1 justify-content-between gap-2">
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <Button
                  id="formbtn"
                  key={index}
                  onClick={(e) => setBtnval({ ...btnval, btnval1: item })}
                  variant={`${
                    item == btnval.btnval1 ? 'secondary' : 'outline-secondary'
                  }`}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </Form.Group>
        <Form.Group className="d-grid m-3">
          <strong>How many hours should they stay?</strong>
          <div className="d-flex mt-1 justify-content-between">
            {['0-1', '1-2', '3-6', '6-12'].map((item, index) => {
              return (
                <Button
                  id="formbtn"
                  key={index}
                  onClick={(e) => setBtnval({ ...btnval, btnval2: item })}
                  variant={`${
                    item === btnval.btnval2 ? 'secondary' : 'outline-secondary'
                  }`}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </Form.Group>
        <Form.Group className="d-grid m-3">
          <strong>How often do you need cleaning?</strong>
          <div className=" d-grid  gap-1">
            {[
              { text: 'Once' },
              { text: 'Weekly', discount: '10% Off' },
              { text: 'Bi-Weekly' },
              { text: 'Multiple times on Week ', discount: '15% Off' },
            ].map((item, index) => {
              return (
                <div
                  onChange={handleform}
                  className="form-check mt-3"
                  key={index}
                >
                  <input
                    name="group1"
                    id="group1"
                    type={'radio'}
                    value={item.text}
                    onChange={(e) => e}
                    checked={Cleaningweek === item.text}
                    className="form-control-check"
                  ></input>
                  <label htmlFor="group1">{item.text}</label>
                </div>
              );
            })}
          </div>
        </Form.Group>
        <Form.Group className="d-grid m-3">
          <strong>Do you Need Cleaning Material?</strong>
          <small>
            An additional charge of AED 10/hr applies for cleaning materials
          </small>
          <div className="d-flex mt-2 justify-content-around">
            {['Yes', 'No'].map((item, index) => {
              return (
                <Button
                  id="formbtn"
                  key={index}
                  onClick={(e) => setBtnval({ ...btnval, btnval3: item })}
                  variant={`${
                    item === btnval.btnval3 ? 'secondary' : 'outline-secondary'
                  }`}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </Form.Group>
        <Form.Group className="d-grid m-3">
          <strong>Do you Have any Special Instrutions?</strong>
          <textarea
            value={btnval.Instruc}
            rows={3}
            onChange={(e) => setBtnval({ ...btnval, Instruc: e.target.value })}
            className="form-control mt-2"
            placeholder="Example:You will to bring a gate pass.i will not be home and leaving under the mat.etc.."
          ></textarea>
        </Form.Group>
      </Form>
    </div>
  );
};
const HomeService = () => {
  return (
    <Card className="">
      <CardImg
        src={
          'https://servicemarket.imgix.net/dist/css/img/service/cleaning-maid-services/about-cleaning.jpg'
        }
      ></CardImg>
      <Card.Body>
        <Card.Title>About our home cleaning service</Card.Title>
        <Card.Text>
          Book a home cleaning service starting from AED 35 per hour and we’ll
          handle the rest! Our professional cleaners will thoroughly clean your
          home so you can enjoy a clean home hassle free.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
const DateTime = () => {
  const { formdb, setFormdb } = useGlobalcontext();
  return (
    <Stack className="shadow p-3">
      <Form>
        <Form.Group>
          <strong>Enter a Date</strong>
          <Form.Control
            onChange={(e) => setFormdb({ ...formdb, date: e.target.value })}
            type={'date'}
          ></Form.Control>
          <span className="text-danger">{formdb.err}</span>
        </Form.Group>
        <Form.Group className="mt-3">
          <strong>What Time</strong>
          <Form.Control
            type={'time'}
            onChange={(e) => setFormdb({ ...formdb, time: e.target.value })}
          ></Form.Control>
          <span className="text-danger">{formdb.err2}</span>
        </Form.Group>
      </Form>
    </Stack>
  );
};

const Location = () => {
  const { formdb, setFormdb } = useGlobalcontext();
  return (
    <Stack className="shadow p-3">
      <Form>
        <Form.Group>
          <strong>Where do you need service?</strong>
          <br />
          <span>
            Help our teams get to your place on time by locating it on map below
          </span>
          <InputGroup>
            <InputGroup.Text>
              <GrLocation />
            </InputGroup.Text>
            <Form.Control
              type={'text'}
              value={formdb.ltn}
              onChange={(e) => setFormdb({ ...formdb, ltn: e.target.value })}
              placeholder={'Give a Address for our service'}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
      </Form>
      <span className="text-danger">{formdb.err3}</span>
      <CardImg src={'./map.jpg'} className="mt-2"></CardImg>
    </Stack>
  );
};

const SuccessFully = () => {
  return (
    <Card>
      <CardImg src={'./check-gif.gif'} height={'200'}></CardImg>
      <Card.Body>
        <h2 className="text-center">Submitted Your Application</h2>
        <span className="text-center">
          Witn in 24 Hours Cleaner with take charge in Your House
        </span>
      </Card.Body>
    </Card>
  );
};

const FormFooter = ({ Key, setKey, setPval }) => {
  const { formdb, setFormdb, handlesubmit } = useGlobalcontext();

  const handlecheck = () => {
    if (Key === 'Service Details') {
      handleNext();
    }
    if (Key === 'Date&Time') {
      if (formdb.date === '') {
        setFormdb({
          ...formdb,
          err: 'please select a Date For service',
          errcheck: true,
        });
      } else if (formdb.time === '') {
        setFormdb({
          ...formdb,
          err2: 'please select a Time For service',
          errcheck: true,
        });
      } else if (formdb.time !== '' && formdb.date !== '') {
        setFormdb({
          ...formdb,
          err: '',
          errcheck: false,
        });
        handleNext();
      }
    }
    if (Key === 'location') {
      if (formdb.ltn === '') {
        setFormdb({
          ...formdb,
          err3: 'please select a Location For service',
          errcheck: true,
        });
      } else {
        handleNext();
      }
    }
  };
  const handleNext = () => {
    if (Key === 'Service Details') {
      return setKey('Date&Time');
    }
    if (Key === 'Date&Time') {
      return setKey('location');
    }
    if (Key === 'location') {
      return setKey('Submiited Application');
    }
  };
  const handlereset = () => {
    handleNext();
    handlesubmit();
    setTimeout(() => setKey('Service Details'), 5000);
  };
  return (
    <>
      <Navbar fixed={'bottom'} className="shadow" id="navbar">
        <Container className="d-flex justify-content-center  align-items-center">
          {Key === 'location' ? (
            <Button
              onClick={() => handlereset()}
              variant={'primary'}
              className="w-50  fw-bold"
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={() => handlecheck()}
              variant={'info'}
              className="w-50  fw-bold"
            >
              Next <FaArrowRight />
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};
export default JuctionBookComponent;

import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { subintroads } from '../customdb/icons';
let flexcenter = 'justify-content-center  d-flex align-items-center ';
function Subintro() {
  return (
    <Container className={`w-100 ${flexcenter} subintro`} fluid>
      <Row className={`${flexcenter}`}>
        {subintroads.map((item, index) => {
          return (
            <Col
              xs={'auto'}
              key={item.id}
              // sm={12}
              className=" animate__animated animate__bounce animate__delay-1s animate__fadeInUp"
            >
              <Card>
                <Card.Body className={`${flexcenter} flex-column`}>
                  {item.icon}
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Subintro;

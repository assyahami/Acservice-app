import React, { useState, useEffect } from 'react';
import sanityclient from '../Client';
import { Stack, Button, Card, CardImg,Spinner } from 'react-bootstrap';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-vertical-timeline-component';
function Timelineads() {
  const [loading, setLoading] = useState(false)
  const [Timeline, setTimeline] = useState([]);
  useEffect(() => {
setLoading(true)
    sanityclient
      .fetch(
        `*[_type=="timeline"]{
            title,Description,price,_id,title,
            adimage{
        asset->{
          _id,
          url
        }
    },
        icon{
        asset->{
          _id,
          url
        }
    }
      }`
      )
      .then((data) => setTimeline(data))
      .catch((err) => console.log(err));
setLoading(false);
  
    }, []);
if (loading) {
  return (
    <Stack className="w-100 d-flex justify-content-center h-100">
      <Spinner animation="grow" />
    </Stack>
  );
}
  return (
    <Stack className="mt-5">
      <div className="text-center bg-white-50 animate__animated animate__bounce animate__delay-1s animate__fadeInUp" >
        <h2 id="headertext">Our Most Used Service</h2>
      </div>
      <VerticalTimeline lineColor={'#eaefef'}>
        {Timeline.map((item, index) => {
          return (
            <VerticalTimelineElement
            key={item._id}  
            className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: '7px soild #333' }}
              iconStyle={{ background: '#88cdcd' }}
              icon={ <img src={ `${item.icon.asset.url}`} width={'50'} alt="loading"/>}
            >
              <Card id="card">
                <CardImg
                  src={`${item.adimage.asset.url}`}
                  variant={'top'}
                  alt="loading"
                  id="cardimg"
                ></CardImg>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <span>{item.Description}</span>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex gap-3  justify-content-start aligns-items-center">
                    <Button id={'specialbtn'}>Booking</Button>
                    <Button id={'specialbtn'}>Read more</Button>
                  </div>
                </Card.Footer>
              </Card>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Stack>
  );
}

export default Timelineads;

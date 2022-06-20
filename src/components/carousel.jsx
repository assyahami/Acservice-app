import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  Stack,
  Spinner,
  Placeholder,
  Button,
} from 'react-bootstrap';
import sanityclient from '../Client';
function CarouselSection() {
  const [Carocontent, setCarocontent] = useState([]);  
  useEffect(() => {
    sanityclient
      .fetch(
        `*[_type=="carousel"]{Description,imagetitle,Booking,_id,subtitle,title,Carouselimg{
        asset->{
          _id,
          url
        }
      }}`
      )
      .then((data) => setCarocontent(data))
      .catch((err) => console.log(err));
  }, []);
  if (Carocontent.length==0) {
    return (
      <Placeholder
        id="loader"
        as={Stack}
        xs={12}
        size={'lg'}
        animation="grow"
        className="w-100 d-flex justify-content-center h-100"
      ></Placeholder>
    );
  }
  return (
    <Stack id="carousel" className="w-100 ">
      <Carousel>
        {Carocontent.map((item, index) => {
          return (
            <CarouselItem id="caro-item" key={item._id}>
              <img src={`${item.Carouselimg.asset.url}`} alt="loading...." />
              <div className="overlay"></div>
              <Carousel.Caption className="text-start carocaption">
                <h1>{item.imagetitle}</h1>
                <h4>{item.subtitle}</h4>
                <span>{item.Booking || item.Description}</span>
                <br />
                <Button id={'specialbtn1'}>Contact us</Button>
              </Carousel.Caption>
            </CarouselItem>
          );
        })}
      </Carousel>
    </Stack>
  );
}

export default CarouselSection;

import React, { useState, useEffect } from 'react';
import { Card, CardImg, Stack, Spinner } from 'react-bootstrap';
import Rating from 'react-star-rating-component';

import Slider from 'react-slick';
import sanityclient from '../Client';
function ReviewsSection() {
  const [loading, setLoading] = useState(false);
  const [Reviewcontent, setReviewcontent] = useState([]);
  let settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    infinite: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    setLoading(true);
    sanityclient
      .fetch(
        `*[_type=="UserTestimonals"]{_id,UserName,rating,UserReview,Userimage{
        asset->{
          _id,
          url
        }
      }}`
      )
      .then((data) => setReviewcontent(data))
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
    <Stack
      id="reviews"
      className="w-100 animate__animated animate__bounce animate__delay-1s animate__fadeInUp"
    >
      <Slider {...settings}>
        {Reviewcontent.map((item, index) => {
          return (
            <Stack id={'reviewcard'} key={item._id}>
              <Card className="d-flex card justify-content-center align-items-center">
                <CardImg
                  variant={'center'}
                  src={`${item.Userimage.asset.url}`}
                  alt="loading...."
                ></CardImg>
                <Card.Title className="text-center mt-3">
                  {item.UserName}
                </Card.Title>
                <Rating
                  name="rating"
                  starCount={10}
                  editing={false}
                  value={parseInt(item.rating)}
                  emptyStarColor={'#fff'}
                />
                <Card.Body>
                  <Card.Text>{item.UserReview}</Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          );
        })}
      </Slider>
    </Stack>
  );
}

export default ReviewsSection;

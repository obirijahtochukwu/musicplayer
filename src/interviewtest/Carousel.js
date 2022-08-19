import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

export default function CarouselComponent() {

  // MOBILE VIEW CAROUSEL ITEMs
  const carouselItem = [
    {img: '../../images/banner.png'},
    {img: '../../images/banner.png'},
    {img: '../../images/banner.png'},
    {img: '../../images/banner.png'},
  ];

  // MOBILE VIEW CAROUSEL ITEMs
  const carouselItems = [
    {img: '../../images/768/image 109.png'},
    {img: '../../images/768/image 17.png'},
    {img: '../../images/768/image 109.png'},
    {img: '../../images/768/image 17.png'},
  ]

  return (
    <div className="container px-3">
      <Carousel>
        {carouselItems.map(({img}, index)=>{
          return (
            <Carousel.Item>
              <img  key={index} src={img} className='w-100 d-md-none' style={{borderRadius: '25px'}} alt="" />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <Carousel>
        {carouselItem.map(({img}, index)=>{
          return (
            <Carousel.Item>
              <img  key={index} src={img} className='w-100 d-none d-md-block' style={{borderRadius: '25px'}} alt="" />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
    )
}

import React from 'react'
import Carousel from 'better-react-carousel'
import s1Image from "../assets/images/img-S1-office.jpg"
import coImage from "../assets/images/img-slf-cops.jpg"
import doImage from "../assets/images/img-slf-office.jpg"

const AdvGallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={s1Image} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={coImage} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={doImage} />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}

export default AdvGallery;
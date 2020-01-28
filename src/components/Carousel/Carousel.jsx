import React, { Component, Fragment } from 'react'

import { Carousel } from 'antd'

import { Slide } from './styled'

import './style.css'

class AntCarousel extends Component {
  render() {
    const images = [
      'http://localhost:3000/images/Slide-1.jpg',
      'http://localhost:3000/images/Slide-2.jpg',
      'http://localhost:3000/images/Slide-3.jpg',
      'http://localhost:3000/images/Slide-4.jpg',
    ]

    return (
      <Fragment>
        <Carousel autoplay dots={false} >
          {images.map( (image, index) => <Slide key={index} src={image} alt="text"/> )}
        </Carousel>
      </Fragment>
    )
  }
}

export default AntCarousel

import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import img1 from '../images/carousel/1.jpg'
import img2 from '../images/carousel/2.jpg'
import img3 from '../images/carousel/3.jpg'
import img4 from '../images/carousel/4.jpg'
import img5 from '../images/carousel/5.jpg'


class MyCarousel extends Component {

  render() {
    return(
      <div className="container fade-later">
        <Carousel autoplay={true} autoplayInterval={5000} swiping={true} frameOverflow='hidden' wrapAround={true}>
          <img src={img1} onLoad={() => {window.dispatchEvent(new Event('resize'));}} alt=""/>
          <img src={img2} onLoad={() => {window.dispatchEvent(new Event('resize'));}} alt=""/>
          <img src={img3} onLoad={() => {window.dispatchEvent(new Event('resize'));}} alt=""/>
          <img src={img4} onLoad={() => {window.dispatchEvent(new Event('resize'));}} alt=""/>
          <img src={img5} onLoad={() => {window.dispatchEvent(new Event('resize'));}} alt=""/>
        </Carousel>
      </div>
    )
  }
}

export default MyCarousel;

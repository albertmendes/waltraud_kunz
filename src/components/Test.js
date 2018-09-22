import React, {Component} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import "../../node_modules/animate.css/animate.min.css"
import MyLightbox from './MyLightbox.js'

class Test extends Component {
  render() {
    return(
      <div className="middle-maxw section">
        <MyLightbox />
        <ScrollAnimation animateIn='fadeInUp'>
          <h1>React version: {React.version}</h1>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Test;

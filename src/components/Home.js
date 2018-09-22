import React, {Component} from 'react';
import MyCarousel from './MyCarousel.js'
import MyTwitter from './MyTwitter.js'

class Home extends Component {
  render() {
    document.title = "Waltraud Kunz | Malerin";

    return(
      <div className="section">
        <MyCarousel />
        <MyTwitter />
      </div>
    );
  }
}

export default Home;

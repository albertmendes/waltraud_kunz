import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Facebook from './Facebook.js'
import fb from '../images/fb.svg';
import tw from '../images/twitter.svg';

class MyFooter extends Component {

  render() {
    var d = new Date();
    var n = d.getFullYear();
    return(
      <div className="footer">
        <div className="container al-center">
          &copy; Waltraud Kunz {n} <a href="https://www.facebook.com/waltraud.kunz.5" className="fb" target="_blank" rel="noopener noreferrer"><img src={fb} alt=""/></a>
          <a href="https://twitter.com/waltraudkunz" className="tw" target="_blank" rel="noopener noreferrer"><img src={tw} alt=""/></a>
          <Facebook /> <Link to="/Impressum">Impressum</Link>
        </div>
      </div>
    );
  }
}

export default MyFooter;

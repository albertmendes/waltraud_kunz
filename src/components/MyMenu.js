import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyMenu extends Component {

  handleClick() {
    var dc = document.getElementsByClassName('dropdown-content')[0];
    dc.classList.toggle('toggle');
  }

  render() {
    return(
      <div className="container al-center">
        <ul className="main-menu">
          <li><Link to='/'>News</Link></li>
          <li><Link to='/Biographie'>Biographie</Link></li>
          <li><Link to='/Galerie'>Galerie</Link></li>
          <li><Link to='/Ausstellungen'>Ausstellungen</Link></li>
          <li><Link to='/Kontakt'>Kontakt</Link></li>
        </ul>
        <div className="dropdown" onClick={this.handleClick}>
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to='/'>News</Link>
            <Link to='/Biographie'>Biographie</Link>
            <Link to='/Galerie'>Galerie</Link>
            <Link to='/Ausstellungen'>Ausstellungen</Link>
            <Link to='/Kontakt'>Kontakt</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MyMenu;

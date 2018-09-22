import React, {Component} from 'react';
import Bewegung from './Galerie/Bewegung.js'
import Koerper from './Galerie/Koerper.js'
import Fliegen from './Galerie/Fliegen.js'
import Land from './Galerie/Land.js'
import Figuren from './Galerie/Figuren.js'
import Bekannt from './Galerie/Bekannt.js'
import Farbe from './Galerie/Farbe.js'

import Noir from './Galerie/Noir.js';
import Penses from './Galerie/Penses.js';
import Passera from './Galerie/Passera.js';

import Shakespeare from './Galerie/Shakespeare.js';

class Galerie extends Component {

  render() {
    document.title = "Waltraud Kunz | Malerin - Galerie";

    return(
      <div className="section container fade-later">
        <h1>Eine Auswahl meiner Malerei</h1>
        <p>
          Klicken Sie auf ein Bild unten um die Bilder der jeweiligen Serie zu betrachten.
        </p>
        <div className="malerei-container">
          <Bewegung />
          <Koerper />
          <Fliegen />
          <Land />
        </div>
        <div className="malerei-container">
          <Figuren />
          <Bekannt />
          <Farbe />
        </div>
        <div style={{clear:"both", height:'89px'}}>
        </div>
        <h1>Illustration »Livres manuscripts peints«</h1>
        <p>
          Folgende Bücher sind in Zusammenarbeit mit der Poetin <a href="http://lsuccar.free.fr/" rel="noopener noreferrer" target="_blank">Laurette Succar</a> entstanden.
        </p>
        <div className="malerei-container">
          <Noir />
          <Penses />
          <Passera />
        </div>
        <div style={{clear:"both", height:'89px'}}>
        </div>
        <h1>Zeichnungen</h1>
        <p>
          Zeichnungen zu einem privaten Druck von Shakespeare.
        </p>
        <div className="malerei-container">
          <Shakespeare />
        </div>
      </div>
    );
  }
}

export default Galerie;

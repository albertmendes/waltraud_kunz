import React, { Component } from 'react';
import biowaltraud from '../images/waltraud_bio.jpg';
import MarcoPdf from '../Marco.pdf';
import LeoPdf from '../Leonardo.pdf';

class Bio extends Component {
  render() {
    document.title = "Waltraud Kunz | Malerin - Biographie";

    return(
      <div className="bio-section">
        <div className="container fade-later" style={heading}>
          <h1>Ein paar Worte über mich</h1>
        </div>
        <div className="container fade-later">
          <img className="bio-left" src={biowaltraud} alt=""/>
          <div className="bio-right" style={{lineHeight: '24px'}}>
            <h2>2016</h2>
              Erhalt des <a href={LeoPdf} target="_blank" rel="noopener noreferrer">International Prize Leonardo da Vinci </a>
              <br/>
              <p>
                »Eine besondere Ehre wurde der gebürtigen Stubaierin Waltraud Kunz (geborene Pfurtscheller) kürzlich zu Teil. Die 73 jährige Künstlerin wurde am 29.01.2016 in Florenz mit dem „International Prize Leonardo da Vinci“ ausgezeichnet. Der Preis zählt zu den wichtigsten Kunstpreisen der Welt und wird vom bekannten italienischen Kunstkurator Salvatore Russo (Galleria Russo Rome) für besondere künstlerische Verdienste verliehen.«
              </p>
          </div>


          <div className="years">
            <article>
              <h2>2015</h2>
              <p>
                Erhalt des <a href={MarcoPdf} target="_blank" rel="noopener noreferrer">Marco Polo International Prize</a>
              </p>
            </article>
            <article>
              <h2>2000</h2>
              <p>
              Internationale Sommerakademie, Salzburg
              </p>
            </article>
            <article>
              <h2>1995-2007</h2>
              <p>
                Institut zur Beibehaltung "Ästhetischer Gewohnheiten" bei Reiner Pfeiffer, Wertheim
              </p>
            </article>
            <article>
              <h2>1967-1969</h2>
              <p>
                Art School Toronto, Kanada
              </p>
            </article>
          </div>
          <div className="years">
            <article>
              <h2>1942</h2>
              <p>
                geboren in Innsbruck, lebt seit 1980 in Wertheim
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;

const heading = {
  padding: '0 21px 21px 21px',
};

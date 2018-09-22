import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import k1_small from '../../images/Galerie/Malerei/koerper/koerper1_small.jpg'
import k1 from '../../images/Galerie/Malerei/koerper/koerper1.jpg'
import k2 from '../../images/Galerie/Malerei/koerper/koerper2.jpg'
import k3 from '../../images/Galerie/Malerei/koerper/koerper3.jpg'
import k4 from '../../images/Galerie/Malerei/koerper/koerper4.jpg'
import k5 from '../../images/Galerie/Malerei/koerper/koerper5.jpg'
import k6 from '../../images/Galerie/Malerei/koerper/koerper6.jpg'

const images = [
    k1,
    k2,
    k3,
    k4,
    k5,
    k6
];

const captions = [
  'Versammlung 50x70cm Öl auf Leinwand',
  'Körperlandschaften 150x110 Öl auf Leinwand',
  'Kuss 150x110cm Öl auf Leinwand',
  'Körperlandschaften 145x135cm Öl auf Leinwand',
  'Schwimmbad 182x157cm Öl auf Leinwand',
  'Figurengruppe 150x130cm Öl auf Leinwand'
]

class Koerper extends Component {
  constructor(props) {
    super(props);

    this.state = {
           photoIndex: 0,
           isOpen: false
    };
  }


  render() {
    const {
        photoIndex,
        isOpen,
    } = this.state;

    return(
      <article className="gal-item">
        <figure>
          <img src={k1_small} alt=""
            onClick={() => this.setState({ isOpen: true })} />

            {isOpen &&
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    imageCaption={captions[photoIndex]}

                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() => this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })}
                    onMoveNextRequest={() => this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })}
                />
            }
          <figcaption>
            <strong>Körperlandschaften</strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Koerper;

import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import b1_small from '../../images/Galerie/Malerei/bekannt/bekannt1_small.jpg'
import b1 from '../../images/Galerie/Malerei/bekannt/bekannt1.jpg'
import b2 from '../../images/Galerie/Malerei/bekannt/bekannt2.jpg'
import b3 from '../../images/Galerie/Malerei/bekannt/bekannt3.jpg'
import b4 from '../../images/Galerie/Malerei/bekannt/bekannt4.jpg'
import b5 from '../../images/Galerie/Malerei/bekannt/bekannt5.jpg'
import b6 from '../../images/Galerie/Malerei/bekannt/bekannt6.jpg'

const images = [
    b1,b2,b3,b4,b5,b6
];

const captions = [
  'Bekannt und unbekannt 10x10cm Acryl auf Leinwand',
  'Bekannt und unbekannt 10x10cm Acryl auf Leinwand',
  'Bekannt und unbekannt 10x10cm Acryl auf Leinwand',
  'Bekannt und unbekannt 10x10cm Acryl auf Leinwand',
  'Bekannt und unbekannt 10x10cm Acryl auf Leinwand',
  'Bekannt und unbekannt 10x10cm Acryl auf Leinwand'
]

class Bekannt extends Component {
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
          <img src={b1_small} alt=""
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
            <strong>Bekannt und unbekannt</strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Bekannt;

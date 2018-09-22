import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import f1_small from '../../images/Galerie/Malerei/farbe/farbe1_small.jpg'
import f1 from '../../images/Galerie/Malerei/farbe/farbe1.jpg'
import f2 from '../../images/Galerie/Malerei/farbe/farbe2.jpg'
import f3 from '../../images/Galerie/Malerei/farbe/farbe3.jpg'

const images = [
    f1,f2,f3
];

const captions = [
  'Farbrhythmus 80x100cm Acryl auf Leinwand',
  'Farbrhythmus von Gelb nach Rot 100x100cm Acryl auf Leinwand',
  'Farbrhythmus von Rot nach Blau 90x80cm Acryl auf Leinwand'
]

class Farbe extends Component {
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
          <img src={f1_small} alt=""
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
            <strong>Farbrhythmus</strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Farbe;

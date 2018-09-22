import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import bew1_small from '../../images/Galerie/Malerei/bewegung/bew1_small.jpg'
import bew1 from '../../images/Galerie/Malerei/bewegung/bew1.jpg'
import bew2 from '../../images/Galerie/Malerei/bewegung/bew2.jpg'
import bew3 from '../../images/Galerie/Malerei/bewegung/bew3.jpg'
import bew4 from '../../images/Galerie/Malerei/bewegung/bew4.jpg'
import bew5 from '../../images/Galerie/Malerei/bewegung/bew5.jpg'
import bew6 from '../../images/Galerie/Malerei/bewegung/bew6.jpg'
import bew7 from '../../images/Galerie/Malerei/bewegung/bew7.jpg'
import bew8 from '../../images/Galerie/Malerei/bewegung/bew8.jpg'
import bew9 from '../../images/Galerie/Malerei/bewegung/bew9.jpg'
import bew10 from '../../images/Galerie/Malerei/bewegung/bew10.jpg'

const images = [
    bew1,
    bew2,
    bew3,
    bew4,
    bew5,
    bew6,
    bew7,
    bew8,
    bew9,
    bew10
];

const captions = [
  'Bewegung 100x100cm Ei-Tempera auf Leinwand',
  'Liebe 50x70cm Ei-Tempera auf Leinwand',
  'Tanz 100x100cm Ei-Tempera auf Leinwand',
  'Fest 120x70cm Ei-Tempera auf Leinwand',
  'Rond 100x100cm Ei-Tempera',
  'Lila 100x100cm Ei-Tempera',
  'Tanz 100x80cm Ei-Tempera',
  'Tanz 80x80cm Ei-Tempera',
  'Tanz 100x100cm Ei-Tempera',
  'Verschlungen 80x100cm Ei-Tempera'
]

class Bewegung extends Component {
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
          <img src={bew1_small} alt=""
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
            <strong>Bewegung</strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Bewegung;

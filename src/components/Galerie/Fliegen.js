import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import f1_small from '../../images/Galerie/Malerei/fliegen/fliegen1_small.jpg'
import f1 from '../../images/Galerie/Malerei/fliegen/fliegen1.jpg'
import f2 from '../../images/Galerie/Malerei/fliegen/fliegen2.jpg'
import f3 from '../../images/Galerie/Malerei/fliegen/fliegen3.jpg'
import f4 from '../../images/Galerie/Malerei/fliegen/fliegen4.jpg'

const images = [
    f1,f2,f3,f4
];

const captions = [
  'Fliegen 70x60cm Öl auf Leinwand',
  'Fliegen 200x160cm Öl auf Leinwand',
  'Landen 70x60cm Öl auf Leinwand',
  'Landen 200x160cm Öl auf Leinwand'
]

class Fliegen extends Component {
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
            <strong>Fliegen und Landen</strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Fliegen;

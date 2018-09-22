import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import l1_small from '../../images/Galerie/Malerei/land/land1_small.jpg'
import l1 from '../../images/Galerie/Malerei/land/land1.jpg'
import l2 from '../../images/Galerie/Malerei/land/land2.jpg'
import l3 from '../../images/Galerie/Malerei/land/land3.jpg'
import l4 from '../../images/Galerie/Malerei/land/land4.jpg'
import l5 from '../../images/Galerie/Malerei/land/land5.jpg'
import l6 from '../../images/Galerie/Malerei/land/land6.jpg'
import l7 from '../../images/Galerie/Malerei/land/land7.jpg'
import l8 from '../../images/Galerie/Malerei/land/land8.jpg'

const images = [
    l1,l2,l3,l4,l5,l6,l7,l8
];

const captions = [
  'Land und Leute 160x150cm Spachteltechnik Acryl aufLeinwand',
  'Land und Leute 163x42cm Spachteltechnik Acryl auf Leinwand',
  'Land und Leute 50x50cm Acryl auf Holz',
  'Land und Leute 50x50cm Acryl auf Holz',
  'Land und Leute 110x150cm Acryl auf Leinwand',
  'Land und Leute 105x150cm Acryl auf Leinwand',
  '50x50cm Acryl auf Holz',
  'Land und Leute 50x50cm Acryl auf Holz'
]

class Land extends Component {
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
          <img src={l1_small} alt=""
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
            <strong>Land und Leute</strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Land;

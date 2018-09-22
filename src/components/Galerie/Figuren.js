import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import f1_small from '../../images/Galerie/Malerei/figuren/figuren1_small.jpg'
import f1 from '../../images/Galerie/Malerei/figuren/figuren1.jpg'
import f2 from '../../images/Galerie/Malerei/figuren/figuren2.jpg'
import f3 from '../../images/Galerie/Malerei/figuren/figuren3.jpg'
import f4 from '../../images/Galerie/Malerei/figuren/figuren4.jpg'
import f5 from '../../images/Galerie/Malerei/figuren/figuren5.jpg'
import f6 from '../../images/Galerie/Malerei/figuren/figuren6.jpg'
import f7 from '../../images/Galerie/Malerei/figuren/figuren7.jpg'
import f8 from '../../images/Galerie/Malerei/figuren/figuren8.jpg'

const images = [
    f1,f2,f3,f4,f5,f6,f7,f8
];

const captions = [
  'Flucht 70x50cm Mischtechnik auf Leinwand',
  'Flucht 50x50cm Mischtechnik auf Leinwand',
  'Figuren 40x40cm Acryl auf Holz',
  'Figuren 40x40cm Acryl auf Holz',
  'Figuren 30x30cm Acryl auf Holz',
  'Figuren 40x40cm Acryl auf Holz',
  'Figuren 40x40cm Acryl auf Holz',
  'Figuren 30x30cm Acryl auf Holz'
]

class Figuren extends Component {
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
            <strong>Figuren</strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Figuren;

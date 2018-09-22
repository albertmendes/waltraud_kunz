import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import n1_small from '../../images/Galerie/Shakespeare/1_small.jpg';
import n1 from '../../images/Galerie/Shakespeare/1.jpg';
import n2 from '../../images/Galerie/Shakespeare/2.jpg';
import n3 from '../../images/Galerie/Shakespeare/3.jpg';
import n4 from '../../images/Galerie/Shakespeare/4.jpg';
import n5 from '../../images/Galerie/Shakespeare/5.jpg';
import n6 from '../../images/Galerie/Shakespeare/6.jpg';
import n7 from '../../images/Galerie/Shakespeare/7.jpg';
import n8 from '../../images/Galerie/Shakespeare/8.jpg';

const images = [
    n1, n2, n3, n4, n5,n6,n7,n8
];

const captions = [
  '1','2','3','4','5','6','7','8'
];

class Shakespeare extends Component {
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
          <img src={n1_small} alt=""
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
            <strong></strong>
          </figcaption>
        </figure>
      </article>
    );
  }
}

export default Shakespeare;

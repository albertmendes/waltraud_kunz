import React, {Component} from 'react';

class Garticle extends Component {
  render() {
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

export default Garticle;

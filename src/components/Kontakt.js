import React, {Component} from 'react';
import fb from '../images/fb-kontakt.svg';
import tw from '../images/twitter-kontakt.svg';
import mail from '../images/mail.svg';
import phone from '../images/phone.svg';

class Kontakt extends Component {
  render() {
    const mto = "\x6d\x61\x69\x6c\x74\x6f\x3a\x69\x6e\x66\x6f\x40\x77\x61\x6c\x74\x72\x61\x75\x64\x2d\x6b\x75\x6e\x7a\x2e\x64\x65";
    const liame = "\x69\x6e\x66\x6f\x40\x77\x61\x6c\x74\x72\x61\x75\x64\x2d\x6b\x75\x6e\x7a\x2e\x64\x65";
    return(
      <div className="container al-center kontakt-section fade-later">
        <p className="kontakt-headline">
          Kontaktieren Sie mich per Email und finden Sie mich in den sozialen Netzwerken.
        </p>
        <article>
          <figure>
            <a href="tel:049934221016"><img src={phone} alt='' /></a>
          </figure>
          <figcaption>
            049 9342 21016
          </figcaption>
        </article>
        <article>
          <figure>
            <a href={mto}><img src={mail} alt='' /></a>
          </figure>
          <figcaption>
            {liame}
          </figcaption>
        </article>
        <article>
          <figure>
            <a href="https://www.facebook.com/waltraud.kunz.5" target="_blank" rel="noopener noreferrer"><img src={fb} alt=""/></a>
          </figure>
          <figcaption>
            fb.me/waltraud.kunz.5
          </figcaption>
        </article>
        <article>
          <figure>
            <a href="https://twitter.com/waltraudkunz" target="_blank" rel="noopener noreferrer"><img src={tw} alt=""/></a>
          </figure>
          <figcaption>
            @waltraudkunz
          </figcaption>
        </article>
      </div>
    );
  }
}

export default Kontakt;

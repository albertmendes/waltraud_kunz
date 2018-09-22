import React, { Component } from 'react';
import MarcoPdf from '../Marco.pdf';

class Marco extends Component {

  componentWillMount() {
    window.open(MarcoPdf, '_blank');
    window.history.back();
  }
  render() {
    return(
      <div>
      </div>
    );
  }
}

export default Marco;

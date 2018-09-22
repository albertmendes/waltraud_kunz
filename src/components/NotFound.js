import React, { Component } from 'react';

class NotFound extends Component {

  render() {
    document.title="404 Not Found";
    return(
      <div className="container nf al-center">
        <h1>Diese Seite existiert nicht</h1>
      </div>
    )
  }
}

export default NotFound;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';

import Svg from './components/Svg.js'
import Bio from './components/Bio.js'
import Home from './components/Home.js'
import Galerie from './components/Galerie.js'
import Ausstellungen from './components/Ausstellungen.js'
import Kontakt from './components/Kontakt.js'
import Impressum from './components/Impressum.js'
import MyFooter from './components/MyFooter.js'
import NotFound from './components/NotFound.js'

class App extends Component {

  render() {
    return (
      <div>
        <Svg />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Biographie" component={Bio} />
          <Route exact path="/Galerie" component={Galerie} />
          <Route exact path="/Ausstellungen" component={Ausstellungen} />
          <Route exact path="/Kontakt" component={Kontakt} />
          <Route exact path="/Impressum" component={Impressum} />
          <Route path="*" component={NotFound} />
        </Switch>
        <MyFooter />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

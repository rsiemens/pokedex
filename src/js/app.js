import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import {App, ListView, PokemonView} from './components';


/**
 * Kickoff our app and render to the DOM
 */
function startApp () {
  var el = document.getElementById('app');

  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={ListView} />
        <Route path="pokemon/:number" component={PokemonView} />
      </Route>
    </Router>
  ), el);
}

if (window.cordova) {  // we're on a device
  // provide some easier debugging on devices
  // TODO: move this into a logging system
  window.onerror = function (errorMsg, url, lineNumber) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
  };

  /*
   * MAIN EVENT LISTENER FOR CORDOVA
   * This event fires once cordova has fully loaded. Once this event has fired
   * you can safely make calls to Cordova APIs.
   */
  document.addEventListener('deviceready', () => {
    startApp();
  }, false);
} else {  // browser
  startApp();
}

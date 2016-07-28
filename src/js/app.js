import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import $ from 'jquery';

import pokemon from './stores/pokemon';
import {ListView} from './components/ListView';


const App = React.createClass({
  render () {
    return (
      <ListView pokemon={pokemon} />
    );
  }
});


/**
 * Kickoff our app and render to the DOM
 */
function startApp () {
  var el = document.getElementById('app');
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  ), el);
}

if (window.cordova) {  // were on a device
  /*
   * MAIN EVENT LISTENER FOR CORDOVA
   * This event fires once cordova has fully loaded. Once this event has fired
   * you can safely make calls to Cordova APIs.
   */
  document.addEventListener('deviceready', () => {
    startApp();
  });
} else {  // browser
  startApp();
}

import React from 'react';
import PokemonStore from '../stores/pokemon';


/**
 * Root node of our app. Structure looks like this:
 *
 *    - App
 *      - ListView
 *        - ListItem
 *      - PokemonView
 *
 * Responsible for maintaing the shared pokemon data state
 * across all components.
 */
const App = React.createClass({

  _token: null,

  /**
   * Callback passed to the `PokemonStore.addCatchListener`.
   * Invoked when the dispatcher emits a Catch change.
   */
  _onCaught () {
    this.setState({pokemon: PokemonStore.getAll()});
  },

  getInitialState () {
    return {pokemon: PokemonStore.getAll()};
  },

  componentDidMount () {
    this._token = PokemonStore.addCatchListener(this._onCaught);
  },

  componentWillUnmount () {
    if (this._token !== null) {
      PokemonStore.removeListener(this._token);
    }
  },

  render () {
    return (
      React.cloneElement(
        this.props.children,
        {pokemon: this.state.pokemon}
      )
    );
  },

});

export default App;

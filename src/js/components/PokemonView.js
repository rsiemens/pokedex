import React from 'react';
import {Link} from 'react-router';
import Actions from '../actions/actions';


const PokemonView = React.createClass({

  pokemon: null,

  /**
   * Get an obect representing a pokemon, queried by a pokemons number
   * @param {string} number Number string - ex. '001' (Bulbasaur)
   * @return {object|boolean} If no pokemon match is found will return
   *   false, otherwise return pokemon object.
   */
  _getPokemon (number) {
    var pokemon = this.props.pokemon;

    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].Number === number) {
        return pokemon[i]
      }
    }
    return false;
  },

  /**
   * Create a catch action which will be sent to the dispatcher ultimately
   * causing a setState trigger in the App component.
   */
  _toggleCaught () {
    Actions.catchAction(this.pokemon.Name);
  },

  componentDidMount () {
    this.pokemon = this._getPokemon(this.props.params.number);
  },

  render () {
    if (!this.pokemon) {
      return (
        <div>
          <Link to="/">Back</Link>
          <div>No match for {this.props.params.number}</div>
        </div>
      );
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <img className='pokemon-img' src={'img/pokemon/' + this.pokemon.Number + '.gif'} />
        <p>{this.pokemon.Number} {this.pokemon.Name}</p>
        <input type="checkbox" checked={this.pokemon.Caught} onChange={this._toggleCaught} />
      </div>
    );
  },

});

export default PokemonView;

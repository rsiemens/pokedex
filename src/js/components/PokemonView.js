import React from 'react';
import {Link} from 'react-router';


const PokemonView = React.createClass({
  /**
   * Get an obect representing a pokemon, queried by a pokemons number
   * @param {String} number Number string - ex. '001' (Bulbasaur)
   * @return {Object|Boolean} If no pokemon match is found will return
   *   false, otherwise return pokemon object.
   */
  getPokemon (number) {
    var pokemon = this.props.pokemon;

    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].Number === number) {
        return pokemon[i]
      }
    }
    return false;
  },
  render () {
    var pokemon = this.getPokemon(this.props.params.number);
    if (!pokemon) {
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
        <img className='pokemon-img' src={'img/pokemon/' + pokemon.Number + '.gif'} />
        <p>{pokemon.Number} {pokemon.Name}</p>
      </div>
    );
  }
});

export {PokemonView};

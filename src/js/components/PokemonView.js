import React from 'react';
import {Link} from 'react-router';
import Actions from '../actions/actions';
import PokemonEvolutions from './PokemonEvolutions';


const PokemonView = React.createClass({

  /**
   * Get an obect representing a pokemon, queried by a pokemons number
   * @param {string} number Number string - ex. '001' (Bulbasaur)
   * @return {object|boolean} If no pokemon match is found will return
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

  /**
   * Create a catch action which will be sent to the dispatcher ultimately
   * causing a setState trigger in the App component.
   */
  _toggleCaught () {
    Actions.catchAction(this.state.pokemon.Name);
  },

  type () {
    var typeI = this.state.pokemon['Type I'] || [];
    var typeII = this.state.pokemon['Type II'] || [];

    return typeI.concat(typeII).map((type, i) => {
      return (<span key={i} className={'type-' + type.toLowerCase()}>{type}</span>)
    });
  },

  weaknesses () {
    return this.state.pokemon.Weaknesses.map((weakness, i) => {
      return (<span key={i} className={'type-' + weakness.toLowerCase()}>{weakness}</span>);
    });
  },

  evolutionHandler (number) {
    this.setState({ pokemon: this.getPokemon(number) });
  },

  getInitialState () {
    return { pokemon: this.getPokemon(this.props.params.number) };
  },

  render () {
    if (!this.state.pokemon) {
      return (
        <div>
          <Link to='/'>Back</Link>
          <div className='pokemon-profile'>
            <img className='pokemon-img' src={'img/pokemon/132' + '.gif'} />
            <div>Something went wrong</div>
          </div>
        </div>
      );
    }

    return (
      <div className='pokemon-profile-container'>
        <Link to='/'>Back</Link>
        <div className='pokemon-profile'>
          <img className='pokemon-img' src={'img/pokemon/' + this.state.pokemon.Number + '.gif'} />
          <h2>#{this.state.pokemon.Number} {this.state.pokemon.Name}</h2>
          <h3>{this.state.pokemon.Classification}</h3>
          <div className='pokemon-info'>
            <p>Weight: {this.state.pokemon.Weight} Height: {this.state.pokemon.Height}</p>
            <div>
              Type: {this.type()}
            </div>
            <div>
              Weaknesses: {this.weaknesses()}
            </div>
            Mark caught: <input
                          type='checkbox'
                          checked={this.state.pokemon.Caught}
                          onChange={this._toggleCaught}
                         />
          </div>
          <PokemonEvolutions evolutionHandler={this.evolutionHandler} pokemon={this.state.pokemon} />
        </div>
      </div>
    );
  },

});

export default PokemonView

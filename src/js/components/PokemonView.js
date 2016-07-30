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

  type () {
    var typeI = this.pokemon['Type I'] || [];
    var typeII = this.pokemon['Type II'] || [];

    return typeI.concat(typeII).map((type, i) => {
      return (<span key={i} className={'type-' + type.toLowerCase()}>{type}</span>)
    });
  },

  weaknesses () {
    return this.pokemon.Weaknesses.map((weakness, i) => {
      return (<span key={i} className={'type-' + weakness.toLowerCase()}>{weakness}</span>);
    });
  },

  componentDidMount () {
    this.pokemon = this._getPokemon(this.props.params.number);
  },

  render () {
    if (!this.pokemon) {
      return (
        <div>
          <Link to="/">Back</Link>
          <div className="pokemon-profile">
            <img className='pokemon-img' src={'img/pokemon/132' + '.gif'} />
            <div>Something went wrong</div>
          </div>
        </div>
      );
    }

    return (
      <div className="pokemon-profile-container">
        <Link to="/">Back</Link>
        <div className="pokemon-profile">
          <img className='pokemon-img' src={'img/pokemon/' + this.pokemon.Number + '.gif'} />
          <p>#{this.pokemon.Number} {this.pokemon.Name}</p>
          <p>{this.pokemon.Classification}</p>
          <div>
            Type: {this.type()}
          </div>
          <div>
            Weaknesses: {this.weaknesses()}
          </div>
        </div>
        Mark caught: <input
                      type="checkbox"
                      checked={this.pokemon.Caught}
                      onChange={this._toggleCaught}
                     />
      </div>
    );
  },

});

export default PokemonView;

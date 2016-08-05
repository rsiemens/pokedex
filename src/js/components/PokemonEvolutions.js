import React from 'react';
import {Link} from 'react-router';
import Actions from '../actions/actions';


const PokemonEvolutions = React.createClass({

  clickHandler(evo) {
    this.props.evolutionHandler(evo.Number);
  },

  getEvolutions () {
    var evos = this.props.pokemon['Next evolution(s)'];
    if (evos && evos.length) {
      return evos.map(evo => {
        return (
          <Link key={evo.Number} to={'/pokemon/' + evo.Number} onClick={this.clickHandler.bind(this, evo)} >
            <div className="pokemon-evolution">
              <img className='pokemon-img' src={'img/pokemon/' + evo.Number + '.gif'} />
              <p>#{evo.Number} {evo.Name}</p>
            </div>
          </Link>
        );
      });
    } else {
      return (<p>No further evolutions</p>);
    }
  },

  render () {
    return (
      <div className='pokemon-evolutions'>
        <h3>Evolutions</h3>
        {this.getEvolutions()}
      </div>
    );
  }

});

export default PokemonEvolutions

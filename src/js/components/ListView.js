import React from 'react';
import {Link} from 'react-router';


const ListView = React.createClass({

  /**
   * Return a list of `ListItems` filtered against `state.searchQuery`.
   */
  generateList () {
    var pokemon = this.props.pokemon;
    var results = [];

    pokemon.forEach((poke) => {
      if (poke.Name.toLowerCase().indexOf(this.state.searchQuery) !== -1) {
        results.push(<ListItem key={poke.Number} poke={poke} />);
      }
    });

    return results;
  },

  /**
   * Handler for input onChange event. Will update `state.searchQuery` with the
   * the input value.
   * @param {Object} evt Event object
   */
  _searchHandler (evt) {
    // TODO: this should be emitting actions. Probably want to implement a store for query data
    this.setState({searchQuery: evt.target.value.toLowerCase()});
  },

  getInitialState () {
    return {searchQuery: ''};
  },

  render () {
    return (
      <div className="pokemon-list-container">
        <div className='search-bar'>
          <input
            type='text'
            onChange={this._searchHandler}
            placeholder="Search"
          />
        </div>
        <div className='pokemon-list'>
          {this.generateList()}
        </div>
      </div>
    );
  }

});


const ListItem = React.createClass({

  render () {
    var caught = this.props.poke.Caught;
    var mainType = this.props.poke['Type I'][0].toLowerCase();

    return (
      <Link to={"pokemon/" + this.props.poke.Number} className="pokemon-link">
        <div className={"pokemon-list-item " + "type-" + mainType}>
          <div className="pokemon-number">#{this.props.poke.Number}</div>
          <div className="pokemon-avatar">
            <img className='pokemon-img' src={'img/pokemon/' + this.props.poke.Number + '.gif'} />
            <p>{this.props.poke.Name} <span className={caught ? 'caught-yes' : 'caught-no' }>Caught</span></p>
          </div>
        </div>
      </Link>
    );
  }

});

export default ListView;

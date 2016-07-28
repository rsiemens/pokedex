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
  searchHandler (evt) {
    this.setState({searchQuery: evt.target.value});
  },

  getInitialState () {
    return {searchQuery: ''};
  },

  render () {
    return (
      <div>
        <div className='search-bar'>
          <input type='text' onChange={this.searchHandler} />
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
    return (
      <Link to={"pokemon/" + this.props.poke.Number}>
        <img className='pokemon-img' src={'img/pokemon/' + this.props.poke.Number + '.gif'} />
        <p>{this.props.poke.Number} {this.props.poke.Name}</p>
      </Link>
    );
  }
});

export {ListView};

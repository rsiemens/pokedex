import AppDispatcher from '../dispatcher/appdispatcher';


const Actions = {

  catchAction (pokemonName) {
    AppDispatcher.handleViewAction({
      actionType: 'MARK_CAUGHT',
      pokemonName: pokemonName
    });
  }

};

export default Actions

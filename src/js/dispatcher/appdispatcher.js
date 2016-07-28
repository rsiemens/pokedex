import Dispatcher from './dispatcher';


var AppDispatcher = Object.create(Dispatcher);

/**
 * A bridge between the view and the dispatcher. Marks the action
 * with meta data specific to the source of the action.
 * @param {object} action The data from the view
 */
AppDispatcher.handleViewAction = function (action) {  // arrow functions will bind this lexically
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

export default AppDispatcher

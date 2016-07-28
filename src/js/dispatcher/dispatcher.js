var _callbacks = [];

const Dispatcher = {

  /**
   * Register a stores callback to be invoked when a action occurs.
   * @param {function} callback The stores callback to be registered.
   * @return {integer} The index of the callback in the _callbacks array.
   */
  register (callback) {
    if (typeof callback !== 'function') {
      throw TypeError('callback parameter must be a function')
    }
    return _callbacks.push(callback) - 1; // return the index of the callback  
  },


  /**
   * Dispatch an action payload to all the stores via registered callbacks.
   * This is a simple implementation which is blocking (not using promises/async).
   * @param {object} action The action payload.
   */
  dispatch (action) {
    _callbacks.forEach((callback, _) => {
      callback(action);
    });
  }

};

export default Dispatcher

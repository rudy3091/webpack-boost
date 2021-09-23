const createStore = (reducer) => {
  let state = reducer(undefined, { type: null });
  let updater;

  return {
    getState: () => state,
    subscribe: (fn) => {
      updater = fn;
    },
    dispatch: (dispatcher) => {
      state = reducer(state, dispatcher);
      updater();
    },
  };
};

export default createStore;

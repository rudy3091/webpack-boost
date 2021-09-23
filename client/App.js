import Component from '@/component';
import createStore from '@/store';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default class App extends Component {
  init() {
    this.store = createStore(counter);
    this.store.subscribe(() => {
      this.container.textContent = this.store.getState();
    });
    this.container.addEventListener('click', () => {
      this.store.dispatch({ type: 'INCREMENT' });
    });
  }

  template() {
    return `<div>${this.store.getState()}</div>`;
  }
}

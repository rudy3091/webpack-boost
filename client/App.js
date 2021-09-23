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
    this.container.className = 'container';
    this.container.style.textAlign = `center`;

    this.store = createStore(counter);
    this.store.subscribe(() => {
      this.value.textContent = this.store.getState();
    });

    this.container.oncontextmenu = () => false;
    this.container.addEventListener('mousedown', (ev) => {
      ev.preventDefault();
      if (ev.button === 0) {
        this.store.dispatch({ type: 'INCREMENT' });
      } else {
        this.store.dispatch({ type: 'DECREMENT' });
      }
    });
  }

  template() {
    return `
      <div class="label">
        left click to increase, right click to decrease
      </div>
      <div class="value">
        ${this.store.getState()}
      </div>`;
  }

  rendered() {
    this.label = this.container.querySelector('.label');
    this.value = this.container.querySelector('.value');
  }
}

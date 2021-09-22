import Component from './component';

export default class App extends Component {
  constructor(target) {
    super(target);
    this.target = target;
  }

  render() {
    this.target.innerHTML = '<div>hello world</div>';
  }
}

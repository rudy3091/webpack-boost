export default class App {
  constructor(target) {
    this.target = target;
  }

  render() {
    this.target.innerHTML = '<div>hello world</div>';
  }
}

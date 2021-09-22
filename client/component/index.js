export default class Component {
  constructor(parent, nodeName = 'div') {
    this.container = document.createElement(nodeName);
    this.parent = parent;
  }

  render() {
    this.parent.appendChild(this.container);
  }
}

export default class Component {
  constructor(parent, props) {
    if (!parent || !props) {
      throw new Error(
        `Component's parent and props object should be passed to constructor`
      );
    }
    this.parent = parent;

    this.container = document.createElement(props.nodeName ?? 'div');
    this.container.className = props.className ?? '';
    this.container.innerHTML = props.innerHTML ?? '';
  }

  render() {
    this.parent.appendChild(this.container);
  }
}

export default class Component {
  constructor(parent, props = {}) {
    if (!parent) {
      throw new Error(
        `Component's parent object should be passed to constructor`
      );
    }
    this.parent = parent;

    this.container = document.createElement(props.nodeName ?? 'div');
    this.container.className = props.className ?? '';
    this.init();

    this.container.innerHTML = props.innerHTML ?? this.template();
    this.render();
    this.rendered();
  }

  template() {
    return ``;
  }

  render() {
    this.parent.appendChild(this.container);
  }

  rendered() { /* do somethign when rendering completed */ }
}

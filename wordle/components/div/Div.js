export class Div {
  constructor(className, id) {
    this.className = className;
    this.id = id;
  }
  toHTML() {
    const element = document.createElement('div');
    element.className = this.className;
    element.id = this.id;

    return element;
  }
}

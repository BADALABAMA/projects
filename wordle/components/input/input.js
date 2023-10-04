export class Input {
  constructor({ type, placeholder, id }) {
    this.type = type;
    this.placeholder = placeholder;
    this.id = id;
  }

  toHTML() {
    const input = document.createElement('input');
    input.type = this.type;
    input.placeholder = this.placeholder;
    input.id = this.id;
    return input;
  }
}

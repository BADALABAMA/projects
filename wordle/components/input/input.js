export class Input {
  constructor({ type, className, id, maxlength }) {
    this.type = type;
    this.className = className;
    this.id = id;
    this.maxlength = maxlength;
  }

  toHTML() {
    const input = document.createElement('input');
    input.type = this.type;
    input.className = this.className;
    input.id = this.id;
    input.maxLength = this.maxlength;
    return input;
  }
}

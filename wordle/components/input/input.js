export class Input {
  constructor({ type, className, id, maxlength, disabled }) {
    this.type = type;
    this.className = className;
    this.id = id;
    this.maxlength = maxlength;
    this.disabled = disabled || '';
  }

  toHTML() {
    const input = document.createElement('input');
    input.type = this.type;
    input.className = this.className;
    input.id = this.id;
    input.maxLength = this.maxlength;
    input.disabled = this.disabled || ' ';
    return input;
  }
}

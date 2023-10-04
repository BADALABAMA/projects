export class Button {
  constructor({ textContent, events, className }) {
    this.textContent = textContent;
    this.className = className;
    this.events = events;
  }

  toHTML() {
    const button = document.createElement('button');
    button.textContent = this.textContent;
    this.events.forEach((event) => {
      button.addEventListener(event.type, event.listener);
    });
    return button;
  }
}

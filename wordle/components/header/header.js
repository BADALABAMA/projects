import { Component } from '../../core/Component';

export class Header extends Component {
  constructor({
    tagName,
    className,
    id,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName,
      className,
      id,
      textContent,
      html,
      children,
      events,
      ...attrs,
    });
  }
}

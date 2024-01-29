import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js"

@customElement('t-experience')
export class TExperience extends LitElement {
  static styles = css`
  h2{  
    color: var(--md-sys-color-on-primary);
  }
  p{  
    color: var(--md-sys-color-on-primary-80);
  }
  span {
    color: black;
    font-weight: normal;
    font-style: italic;
  }
  `
  @property({ type: String }) company = ""
  @property({ type: String }) position = ""
  @property({ type: String }) date = ""
  @property({ type: String }) description = ""

  render() {
    return html`
      <h2>${this.company} <span>${this.position}</span></h2>
      <p>${this.date}</p>
      <slot name="list"></slot>
      <p>${this.description}</p>
    `
  }
}

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("simple-card")
export class SimpleCard extends LitElement {
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;


  // Define reactive properties--updating a reactive property causes
  // the component to update.
  @property() url: string;
  @property() title: string;
  @property() description: string;

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, property values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <a
       		href=${this.url}
       		class="flex flex-col w-full relative gap-2 text-start rounded-3xl bg-surface-1 text-on-surface p-6 cursor-pointer hover:bg-secondary-container hover:text-on-secondary-container"
      	>
    		<md-ripple></md-ripple>
    		<span class="text-2xl font-bold">${ this.title }</span>
    		<span class="text-md">${ this.description } </span>
    	</a> `;
  }
}


import { html, css, PropertyValues } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { MdListItem } from '@material/web/list/list-item.js';

@customElement('t-list-items')
export class TListItem extends MdListItem {

  static styles = [
    css`
      md-item {
        --md-list-item-label-text-size: var(--t-navigation-rail-list-item-text-size);
        gap: 8px !important;
      }      
    `,
    ...MdListItem.styles
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: String, attribute: 'event-name' }) event = "list";

  protected override updated(_: PropertyValues<TListItem>) {
    this.onclick = (event) => {
      if (this.active) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }

      this.dispatchEvent(
        new CustomEvent(`${this.event}-item-interaction`, {
          detail: { state: this },
          bubbles: true,
          composed: true,
        }),
      );
    };
  }

  protected override render() {

    // return html`
    //   ${super.render()}
    // `

    return this.renderListItem(html`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
  }
}

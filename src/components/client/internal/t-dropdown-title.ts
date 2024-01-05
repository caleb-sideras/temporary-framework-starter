import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { TListItem2 } from './t-list-item-2';

@customElement('t-dropdown-title')
export class TDropdownTitle extends TListItem2 {

  @property({ type: Boolean, reflect: true }) collapsed = true;

  protected override render() {
    return this.renderListItem(html`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end">  
          ${this.collapsed ? this.inactiveSlot : this.activeSlot}
        </slot>
        ${this.renderBody()}
      </md-item>
    `);
  }

  get activeSlot() {
    return html`<slot name="active"></slot>`;
  }

  get inactiveSlot() {
    return html`<slot name="inactive"></slot>`;
  }

  protected override onFocus() {
    // NUKED for now - till i figure out how click works
  }

  constructor() {
    super();

    this.addEventListener('click', (_) => {

      this.collapsed = !this.collapsed;
      this.dispatchEvent(new Event('title-activation', { bubbles: true, composed: true }));
    });
  }

}

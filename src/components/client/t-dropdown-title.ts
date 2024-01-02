import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { TNavigationDrawerItem } from "./t-navigation-drawer-list-item";

@customElement('t-dropdown-title')
export class TDropdownTitle extends TNavigationDrawerItem  {
  
  @property({ type: String, attribute: 'event-name' }) event = "dropdown-title";

  @property({ type: Boolean, reflect: true }) collapsed = false;

  protected override render() {
    return this.renderListItem(html`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end">  
          ${this.collapsed ? this.activeSlot : this.inactiveSlot}         </slot>
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

  override handleClick(e: MouseEvent){
    this.collapsed = !this.collapsed;
    super.handleClick(e)
  }
}

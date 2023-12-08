import { MdListItem } from "@material/web/list/list-item";
import { customElement, property } from 'lit/decorators.js';
import { html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

@customElement('t-dropdown-title')
export class TDropdownTitle extends MdListItem {

  static styles = [
    css`
    .inactive, .active {
        border-radius: 9999px;        
        width: 100%;
      }
    .active {
      background: #363639;
    }  
    
  `,
    ...MdListItem.styles
  ]

  @property({ type: Boolean, reflect: true }) collapsed = false;

  @property({ type: Boolean, reflect: true }) active = false;

  protected override render() {
    return this.renderListItem(html`
      <md-item @click="${this.click}"  class="${classMap(this.getTitleState())}">
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

  click() {
    this.collapsed = !this.collapsed;
    this.dispatchEvent(
      new CustomEvent(`t-dropdown-title-iteraction`, {
        detail: { state: this },
        bubbles: true,
        composed: true,
      })
    );
  }

  private getTitleState() {
    return {
      inactive: !this.active,
      active: this.active,
    };
  }
}

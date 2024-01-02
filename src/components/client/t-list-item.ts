import { css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { MdListItem } from '@material/web/list/list-item.js';

@customElement('t-list-items')
export class TListItem extends MdListItem {
  static styles = [
    css`
      md-item {     
          --md-list-item-label-text-size: var(--t-list-item-text-size, 0.95rem);
      }

      :host{
        background-color: var(--t-list-item-container-color, var(--md-sys-color-primary-container, #f5f5f5));
        --md-list-item-label-text-color	: var(--t-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        --md-list-item-trailing-icon-color: var(--t-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        border-radius: var(--t-list-item-border-radius, 32px) !important;

        /** Dynamic **/
        --md-list-item-hover-state-layer-color: var(--t-list-item-hover-state-layer-color, #000000);
        --md-list-item-hover-state-layer-opacity: var(--t-list-item-hover-state-layer-opacity, 0.06);

        --md-list-item-pressed-state-layer-color: var(--t-list-item-pressed-state-layer-color, #000000);
        --md-list-item-pressed-state-layer-opacity: var(--t-list-item-pressed-state-layer-opacity, 0.08);   
      }

      :host([active]){
        --md-list-item-label-text-color: var(--t-list-item-active-color, var(--md-sys-color-primary, #743342));
        --md-list-item-trailing-icon-color: var(--t-list-item-active-color, var(--md-sys-color-primary, #743342));
      }
    `,
    ...MdListItem.styles,
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: String, attribute: 'event-name' }) event = "list";

  constructor() {
    super();
    this.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e: MouseEvent) {
    if (this.active) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }

    this.dispatchEvent(
      new CustomEvent(`t-${this.event}-item-interaction`, {
        detail: { state: this },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

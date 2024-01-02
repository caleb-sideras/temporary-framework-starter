import { css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { TListItem } from "./t-list-item";

@customElement('t-dropdown-list-item')
export class TDropdownItem extends TListItem {
  static styles = [
    css`
      md-item {
        --md-list-item-label-text-size: var(--t-dropdown-list-item-text-size, 0.9rem) !important;
      }      

      :host([active]){
        border: var(--t-dropdown-list-item-border, solid);        
        border-width: var(--t-dropdown-list-item-border-width, 1px);
        border-color: var(--t-dropdown-list-item-active-color, var(--md-sys-color-primary, #743342));
      }
    `,
    ...TListItem.styles
  ]
  @property({ type: String, attribute: 'event-name' }) event = "dropdown-list";

}

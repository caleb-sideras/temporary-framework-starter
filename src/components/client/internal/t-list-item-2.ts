import { css } from "lit";
import { customElement } from 'lit/decorators.js';
import { TListItem } from "./t-list-item";

@customElement('t-list-item-2')
export class TListItem2 extends TListItem {
  static styles = [
    css`
      md-item {
        --md-list-item-label-text-size: var(--t-dropdown-list-item-text-size, 0.9rem) !important;
      }      

      :host([tabindex="0"]) {
        border: var(--t-dropdown-list-item-border, solid);        
        border-width: var(--t-dropdown-list-item-border-width, 1px);
        border-color: var(--t-dropdown-list-item-active-color, var(--md-sys-color-primary, #743342));
      }
    `,
    ...TListItem.styles
  ]
}

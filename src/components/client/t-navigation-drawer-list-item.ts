import { css } from "lit"
import { property, customElement } from "lit/decorators.js";
import { TListItem } from "./t-list-item";

@customElement('t-navigation-drawer-item')
export class TNavigationDrawerItem extends TListItem {

  static styles = [
    css`
      md-item {
        --md-list-item-label-text-size: var(--t-navigation-drawer-list-item-text-size, 0.9rem) !important;
      }      

      :host([active]){
        border: var(--t-navigation-drawer-list-item-border, solid);        
        border-width: var(--t-navigation-drawer-list-item-border-width, 1px);
        border-color: var(--t-navigation-drawer-list-item-active-color, var(--md-sys-color-primary, #743342));
      }
    `,
    ...TListItem.styles,
  ];

  @property({ type: String, attribute: 'event-name' }) event = "drawer-list";
}

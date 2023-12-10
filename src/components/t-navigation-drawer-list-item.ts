import { css } from "lit"
import { TNavigationRailItem } from "./t-navigation-rail-item";
import { property, customElement } from "lit/decorators.js";

@customElement('t-navigation-drawer-item')
export class TNavigationDrawerItem extends TNavigationRailItem {

  static styles = [
    css`
      md-item {
        --md-list-item-label-text-size: var(--t-navigation-drawer-list-item-text-size) !important;
      }      

      :host([active]){
        border: solid !important;
        border-width: 1px !important;
        border-color: var(--t-navigation-rail-list-item-active-color) !important;
      }
    `,
    ...TNavigationRailItem.styles,
  ];

  @property({ type: String, attribute: 'event-name' }) event = "drawer-list";
}

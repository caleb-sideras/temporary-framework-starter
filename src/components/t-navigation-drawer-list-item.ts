import { css } from "lit"
import { TNavigationRailItem } from "./t-navigation-rail-item";
import { property, customElement } from "lit/decorators.js";

@customElement('t-navigation-drawer-item')
export class TNavigationDrawerItem extends TNavigationRailItem {

  static styles = [
    css`
      :host([active]){
        border: none !important;
        border-width: 0px !important;
        border-color: transparent !important;
      }
    `,
    ...TNavigationRailItem.styles,
  ];

  @property({ type: String, attribute: 'event-name' }) event = "drawer-list";
}

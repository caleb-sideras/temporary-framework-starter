import { css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { TListActive } from "./t-list-active";

@customElement('t-navigation-drawer-list')
export class TNavigationDrawerList extends TListActive {

  static styles = [
    css`
      :host {
        --t-list-container-color: var(--t-navigation-drawer-list-container-color, var(--t-list-container-color, #ffffff));
        --t-list-container-font: var(--t-navigation-drawer-list-container-font, var(--t-list-container-font, 'Roboto Mono, monospace'));
        --t-list-container-width: var(--t-navigation-drawer-list-container-width, var(--t-list-container-width, 165px));
        --t-list-container-gap: var(--t-navigation-drawer-list-container-gap, var(--t-list-container-gap, 16px));
      }

      :host([active]) {
        --t-list-container-padding-right: var(--t-navigation-drawer-list-container-padding-right, var(--t-list-container-padding-right, 8px));
        --t-list-container-padding-left: var(--t-navigation-drawer-list-container-padding-left, var(--t-list-container-padding-left, 8px));
        --t-list-container-padding-top: var(--t-navigation-drawer-list-container-padding-top, var(--t-list-container-padding-top, 0px));
        --t-list-container-padding-bottom: var(--t-navigation-drawer-list-container-padding-bottom, var(--t-list-container-padding-bottom, 0px));
      }  
  `,
    ...TListActive.styles
  ]

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @property({ type: String, attribute: 'event' }) event = "drawer-list";

  public clickFirstListItem() {
    if (this.tabs.length <= 0) return;
    // unset activeIndex to avoid propagation cancel
    this.activeIndex = -1;
    this.tabs[0].click();
  }
}

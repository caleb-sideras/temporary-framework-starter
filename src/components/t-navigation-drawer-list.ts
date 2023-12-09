import { css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { TList } from "./t-list";

@customElement('t-navigation-drawer-list')
export class TNavigationDrawerList extends TList {

  static styles = [
    css`
      :host {
        display: none !important;
      }

      :host([active]) {
        display: block !important;
      }  
  `,
  ...TList.styles
  ]

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @property({ type: String, attribute: 'event' }) event = "drawer-list";
}

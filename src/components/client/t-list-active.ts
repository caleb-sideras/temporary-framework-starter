import { css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { TList } from "./t-list";

@customElement('t-list-active')
export class TListActive extends TList {

  static styles = [
    css`
      :host {
        display: none !important;
      }

      :host([active]) {
        display: flex !important;
      }  
  `,
    ...TList.styles
  ]

  @property({ type: Boolean, reflect: true }) active = false;

}

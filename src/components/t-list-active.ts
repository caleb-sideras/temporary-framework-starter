import { css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { TList } from "./t-list";

@customElement('t-list-active')
export class TListActive extends TList {

  static styles = [
    css`
      :host {
        /** MdList Styling **/
        --md-list-container-color: var(--t-list-container-color, #ffffff) !important;
        --md-ref-typeface-plain: var(--t-list-container-font, 'Roboto Mono, monospace');

        width: var(--t-list-container-width, 165px);
        gap: var(--t-list-container-gap, 24px);
        display: none !important;
        flex-direction: column;    
      }

      :host([active]) {
        display: flex !important;
        padding-right: var(--t-list-container-padding-right, 8px !important;
        padding-left: var(--t-list-container-padding-left, 8px) !important;
        padding-top: var(--t-list-container-padding-top, 8px) !important;
        padding-bottom: var(--t-list-container-padding-bottom, 0px) !important;
      }  
  `,
    ...TList.styles
  ]

  @property({ type: Boolean, reflect: true }) active = false;

}

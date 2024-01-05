import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MdList } from '@material/web/list/list';

@customElement('t-dropdown-list')
export class TDropdownList extends MdList {

  static styles = [
    css`
      :host([collapsed]) {
        display: none !important;
      }

      :host {
        width: auto !important;
        display: flex !important;

        --md-list-container-color: var(--t-navigation-dropdown-list-container-color, #ffffff);
        font-family: var(--t-navigation-dropdown-list-container-font, 'Roboto Mono, monospace');
        gap: var(--t-navigation-dropdown-list-container-gap, 4px);
        padding-right: var(--t-navigation-dropdown-list-container-padding-right, 0px !important);
        padding-left: var(--t-navigation-dropdown-list-container-padding-left, 16px) !important;
        padding-top: var(--t-navigation-dropdown-list-container-padding-top, 4px) !important;
        padding-bottom: var(--t-navigation-dropdown-list-container-padding-bottom, 0px) !important;
      }  
  `,
    ...MdList.styles
  ]

  @property({ type: Boolean, reflect: true }) collapsed = true;

}

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

        --t-list-container-color: var(--t-navigation-dropdown-list-container-color, #ffffff);
        --t-list-container-font: var(--t-navigation-dropdown-list-container-font, 'Roboto Mono, monospace');
        --t-list-container-gap: var(--t-navigation-dropdown-list-container-gap, 4px);
        --t-list-container-padding-right: var(--t-navigation-dropdown-list-container-padding-right, 0px);
        --t-list-container-padding-left: var(--t-navigation-dropdown-list-container-padding-left, 16px);
        --t-list-container-padding-top: var(--t-navigation-dropdown-list-container-padding-top, 4px);
        --t-list-container-padding-bottom: var(--t-navigation-dropdown-list-container-padding-bottom, 0px);
      }  
  `,
    ...MdList.styles
  ]

  @property({ type: Boolean, reflect: true }) collapsed = true;

}

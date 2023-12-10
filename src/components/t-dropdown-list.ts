import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TListActive } from './t-list-active';

@customElement('t-dropdown-list')
export class TDropdownList extends TListActive {

  static styles = [
    css`
      :host {
        --t-list-container-color: var(--t-navigation-dropdown-list-container-color, var(--t-list-container-color, #ffffff));
        --t-list-container-font: var(--t-navigation-dropdown-list-container-font, var(--t-list-container-font, 'Roboto Mono, monospace'));
        --t-list-container-width: var(--t-navigation-dropdown-list-container-width, var(--t-list-container-width, 165px));
        --t-list-container-gap: var(--t-navigation-dropdown-list-container-gap, var(--t-list-container-gap, 0px));
      }

      :host([active]) {
        --t-list-container-padding-right: var(--t-navigation-dropdown-list-container-padding-right, var(--t-list-container-padding-right, 0px));
        --t-list-container-padding-left: var(--t-navigation-dropdown-list-container-padding-left, var(--t-list-container-padding-left, 16px));
        --t-list-container-padding-top: var(--t-navigation-dropdown-list-container-padding-top, var(--t-list-container-padding-top, 0px));
        --t-list-container-padding-bottom: var(--t-navigation-dropdown-list-container-padding-bottom, var(--t-list-container-padding-bottom, 0px));
      }  
  `,
    ...TListActive.styles
  ]

  @property({ type: String, attribute: 'event' }) event = "dropdown-list";

}

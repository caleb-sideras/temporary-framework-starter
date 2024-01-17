import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TNavigationContainer } from './t-mobile-navigation-container';

@customElement('t-dropdown-list')
export class TDropdownList extends TNavigationContainer {

  static override styles = [
    css`
      :host{
        --md-list-container-color: var(--t-dropdown-list-container-color, transparent) !important;
      }
    `,
    ...TNavigationContainer.styles
  ];
}

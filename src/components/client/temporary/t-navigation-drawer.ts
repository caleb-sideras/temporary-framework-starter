import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TNavigationContainer } from "./t-mobile-navigation-container";

/**
 * @summary TNavigationDrawer holds and controls drawer items
 *
 * @description
 * Extends TNavigationContainer 
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-navigation-drawer')
export class TNavigationDrawer extends TNavigationContainer {

  static override styles = [
    css`
      :host{
        --md-list-container-color: var(--t-navigation-drawer-container-color, var(--md-sys-color-on-primary, #ffffff)) !important;
      }
    `,
    ...TNavigationContainer.styles
  ];

}

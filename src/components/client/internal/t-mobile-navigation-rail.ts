import { customElement } from 'lit/decorators.js';
import { TMobileNavigationContainer } from './t-mobile-navigation-container'

declare global {
  interface HTMLElementTagNameMap {
    't-mobile-navigation-rail': TMobileNavigationRail;
  }
}

/**
 * @summary TMobileNavigationRail holds the rail items for the mobile navigation modal
 *
 * @description
 * Extends MdList and shows/hides based on active state
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-mobile-navigation-rail')
export class TMobileNavigationRail extends TMobileNavigationContainer {
}

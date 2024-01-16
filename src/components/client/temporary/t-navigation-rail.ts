import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TNavigationContainer } from './t-mobile-navigation-container';

/**
 * @summary TNavigationRail holds and controls rail items
 *
 * @description
 * Extends TNavigationContainer
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-navigation-rail')
export class TNavigationRail extends TNavigationContainer {

  static override styles = [
    css`
      :host{
        --t-navigation-container-gap: var(--t-navigation-rail-container-gap, 24px);
      }
    `,
    ...TNavigationContainer.styles
  ];

  override active = true;

}




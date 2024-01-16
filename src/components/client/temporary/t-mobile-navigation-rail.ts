import { PropertyValueMap } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TNavigationContainer } from "./t-mobile-navigation-container";

/**
 * @summary TMobileNavigationRail holds and controls rail items
 *
 * @description
 * Extends TNavigationContainer
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-mobile-navigation-rail')
export class TMobileNavigationRail extends TNavigationContainer {
  // protected updated(_changedProperties: PropertyValueMap<TNavigationContainer>): void {

  //   //TODO: sure there is a better way to do this
  //   if (_changedProperties.has('active') && this.active) {
  //     console.log("NavigationContainer -> active:", this.active)

  //     const listItem = this.listController.getListItem(this.getBrowerPathname(), true);

  //     if (listItem) this.listController.requestHighlight(listItem);

  //     console.log("NavigationContainer -> listItem:", listItem);
  //   }
  // }
}



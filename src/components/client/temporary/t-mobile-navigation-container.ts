import { PropertyValueMap, css } from 'lit';
import { property } from "lit/decorators.js";
import { TVerticalList } from "./t-vertical-list";

/**
 * @summary TNavigationContainer is a base class for navigation
 *
 * @description
 * Extends TVerticalList and adds functionality to be displayed/hidden which activates list items based on pathname 
 *
 * @final
 * @suppress {visibility}
 */
export class TNavigationContainer extends TVerticalList {

  static override styles = [
    css`
      :host{
        display: none !important; 
        --md-list-container-color: var(--t-navigation-container-color, var(--md-sys-color-secondary, #ffffff));
        font-family: var(--t-navigation-container-font, 'Roboto Mono, monospace');
        gap: var(--t-navigation-container-gap, 0px);
        padding-right: var(--t-navigation-container-padding-right, 0px !important);
        padding-left: var(--t-navigation-container-padding-left, 0px) !important;
        padding-top: var(--t-navigation-container-padding-top, 8px) !important;
        padding-bottom: var(--t-navigation-container-padding-bottom, 0px) !important;
        width: var(--t-navigation-container-width, 165px);
      }
      :host([active]){
        display: flex !important; 
      }
      @media screen and (max-width: 1024px) {
        :host{
          --t-navigation-container-width: 100%;
        }      
      }
    `,
    ...TVerticalList.styles
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  protected updated(_changedProperties: PropertyValueMap<TNavigationContainer>): void {

    if (_changedProperties.has('active') && this.active) {
      console.log("NavigationContainer -> active:", this.active)

      const listItem = this.listController.getListItem(this.getBrowerPathname());

      if (listItem) {
        this.listController.requestHighlight(listItem);
      } else {
        this.listController.onDeactivateItems();
      }
    }
  }

  getBrowerPathname(): string {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath;
  }
}

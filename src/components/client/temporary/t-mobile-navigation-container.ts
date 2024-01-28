import { PropertyValueMap, css } from 'lit';
import { property } from "lit/decorators.js";
import { TVerticalList } from "./t-vertical-list";
import { TListItem } from './t-list';

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
        width: var(--t-navigation-container-width, 100%);
        min-width: var(--t-navigation-container-min-width, 165px);
      }
      :host([active]){
        display: flex !important; 
      }
    `,
    ...TVerticalList.styles
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  public revalidateFromUrl(url: string) {
    const matchingItem = this.listController.getListItem(url);
    this.listController.onDeactivateItems();
    if (matchingItem) this.listController.requestHighlight(matchingItem);
  }

  public revalidateFromBrower() {
    const matchingItem = this.listController.getListItem(this.getBrowerPathname());
    this.listController.onDeactivateItems();
    if (matchingItem) this.listController.requestHighlight(matchingItem);
  }

  private needsRevalidation(listItem: TListItem): boolean {
    if (listItem.active && this.active) return false;
    return true;
  }

  private getBrowerPathname(): string {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath;
  }
}

import { PropertyValueMap, css } from 'lit';
import { property } from 'lit/decorators.js';
import { MdList } from '@material/web/list/list';
import { ListItem } from './internal/t-list';


export class TMobileNavigationContainer extends MdList {

  static override styles = [
    css`
      :host{
        display: none !important; 
        --md-list-container-color: var(--t-navigation-drawer-list-container-color, #ffffff);
        font-family: var(--t-navigation-drawer-list-container-font, 'Roboto Mono, monospace');
        gap: var(--t-navigation-drawer-list-container-gap, 0px);
        padding-right: var(--t-navigation-drawer-list-container-padding-right, 0px !important);
        padding-left: var(--t-navigation-drawer-list-container-padding-left, 0px) !important;
        padding-top: var(--t-navigation-drawer-list-container-padding-top, 8px) !important;
        padding-bottom: var(--t-navigation-drawer-list-container-padding-bottom, 0px) !important;
        width: var(--t-navigation-drawer-list-container-width, 165px);
      }
      :host([active]){
        display: flex !important; 
      }
    `,
    ...MdList.styles
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  protected updated(_changedProperties: PropertyValueMap<TMobileNavigationContainer>): void {

    if (_changedProperties.has('active') && this.active) {
      console.log("MobileNavigationContainer -> active:", this.active)
      // @ts-ignore
      this.listController.onDeactivateItems();
      const url = this.getBrowerHistory();
      const listItem = this.findMatchingParentItem(url, this.items as ListItem[]);
      console.log("MobileNavigationContainer -> listItem:", listItem);
      if (listItem) {
        // @ts-ignore
        this.listController.activateItem(listItem);
      }
    }
  }

  getBrowerHistory(): string {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath;
  }

  findMatchingParentItem(url: string, listItems: ListItem[]): ListItem | null {
    const cleanUrl = this.removeFirstLastSlash(url).split('/');
    console.log("cleanUrl", cleanUrl);
    for (const item of listItems) {
      const cleanItemHref = this.removeFirstLastSlash(item.href).split('/');
      console.log("cleanItemHref ", cleanItemHref);

      if (cleanUrl.slice(0, cleanItemHref.length).join('/') === cleanItemHref.join('/')) {
        return item
      }
    }
    return null
  }

  removeFirstLastSlash(text: string) {
    return text.replace(/^\/|\/$/g, "");
  }
}

import { MdList } from "@material/web/list/list";
import { PropertyValueMap, html, css } from "lit";
import { TNavigationDrawerList } from "./t-navigation-drawer-list";
import { property, customElement } from "lit/decorators.js";
import { ListItem } from "./internal/t-list";
import { Item } from "@material/web/labs/item/internal/item";

@customElement('t-navigation-drawer')
export class TNavigationDrawer extends MdList {

  static styles = [
    css`
      :host{
        --md-list-container-color: var(--t-navigation-drawer-container-color, #ffffff);
        font-family: var(--t-navigation-drawer-container-font, 'Roboto Mono, monospace');
        gap: var(--t-navigation-drawer-container-gap, 0px);
        padding-right: var(--t-navigation-drawer-container-padding-right, 0px !important);
        padding-left: var(--t-navigation-drawer-container-padding-left, 0px) !important;
        padding-top: var(--t-navigation-drawer-container-padding-top, 0px) !important;
        padding-bottom: var(--t-navigation-drawer-container-padding-bottom, 0px) !important;
      }
      `,
    ...MdList.styles,
  ]

  @property({ type: String }) url = '';

  constructor() {
    super();

    // override default behavior of `isItem` from listController
    // @ts-ignore
    this.listController.isItem = (item: HTMLElement): item is TNavigationDrawerList => {
      return (item.localName === 't-navigation-drawer-list');
    }
  }

  /**
    * This is needed to allow children to mount/render/update (i.e. run their logic) before parent accesses their computed properties
    * Rendering order mainly an issue when using browser forward/back button (i.e popstate)
  **/
  async getUpdateComplete() {
    await super.getUpdateComplete();

    // @ts-ignore
    await Promise.all(this.items.map(c => c.updateComplete));

    return true;
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<TNavigationDrawer>) {
    super.firstUpdated(_changedProperties);

    // getUpdateComplete logic defined above
    await this.updateComplete;
  }

  protected updated(_changedProperties: PropertyValueMap<TNavigationDrawer>): void {
    if (_changedProperties.has('url') && this.url !== "") {
      console.log(`TNavigationDrawer: url -> ${this.url}`)

      // @ts-ignore
      this.listController.onDeactivateItems();


      // @ts-ignore
      for (const drawerList of this.items as TNavigationDrawerList[]) {
        const drawerListItems: ListItem[] = drawerList.items;
        const item = drawerList.findMatchingItem(this.url, drawerListItems);

        if (item) {
          // @ts-ignore
          this.listController.activateItem(drawerList);
          drawerList.url = this.url;
          return;
        }
      }
    }
  }

  /**
    * Public Functions
  **/

  splitLeafUrl(url: string): string[] {
    const trimmedUrl = url.replace(/^\/|\/$/g, '');
    const words = trimmedUrl.split('/');

    if (words.length === 1 && words[0] === "") {
      return ['/']
    }
    return words
  }

  popRootNodeUrl(url: string): string {
    const urls = this.splitLeafUrl(url);
    if (!urls || urls.length <= 1) return '';

    const poppedUrls = urls.slice(1);
    const poppedUrl = poppedUrls.join("/");

    return poppedUrl;
  }

  getRootNodeUrl(url: string): string {
    const urls = this.splitLeafUrl(url);
    if (!urls || urls.length <= 0) return '';

    return urls[0];
  }

  protected override render() {
    return html`
      <slot></slot>
    `;
  }

}

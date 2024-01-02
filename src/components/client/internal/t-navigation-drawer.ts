import { MdList } from "@material/web/list/list";
import { PropertyValueMap, html } from "lit";
import { TNavigationDrawerList } from "./t-navigation-drawer-list";
import { property, customElement } from "lit/decorators.js";
import { ListItem } from "./internal/t-list";

@customElement('t-navigation-drawer')
export class TNavigationDrawer extends MdList {

  @property({ type: String }) url = '';

  constructor() {
    super();
    this.listController.isItem = (item: HTMLElement): item is TNavigationDrawerList => {
      return (item.localName === 't-navigation-drawer-list');
    }
  }

  protected updated(_changedProperties: PropertyValueMap<TNavigationDrawer>): void {
    if (_changedProperties.has('url')) {
      console.log("drawer", this.url)

      const rootUrl = this.getRootNodeUrl(this.url);
      // const removedRootUrl = this.popRootNodeUrl(this.url);

      console.log("rootUrl", rootUrl )
      // console.log("removedRootUrl", removedRootUrl)

      this.listController.onDeactivateItems();

      for (const item of this.items as ListItem[]) {
        if (item.id === rootUrl) {
          item.tabIndex = 0;
          item.url = this.url;
          console.log("drawer list ->", item);
          return;
        }
      }
    }
  }

  protected splitLeafUrl(url: string): string[] {
    const trimmedUrl = url.replace(/^\/|\/$/g, '');
    const words = trimmedUrl.split('/');

    if (words.length === 1 && words[0] === "") {
      return ['/']
    }
    return words
  }

  protected popRootNodeUrl(url: string): string {
    const urls = this.splitLeafUrl(url);
    if (!urls || urls.length <= 1) return '';

    const poppedUrls = urls.slice(1);
    const poppedUrl = poppedUrls.join("/");

    return poppedUrl;
  }

  protected getRootNodeUrl(url: string): string {
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

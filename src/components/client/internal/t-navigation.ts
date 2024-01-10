import { html, css, LitElement, PropertyValueMap } from "lit";
import { queryAssignedElements, customElement, property } from "lit/decorators.js";
import { TNavigationRail } from "./t-navigation-rail";
import { TNavigationDrawer } from "./t-navigation-drawer";
import { ListItem } from "./internal/t-list";

@customElement('t-navigation')
export class TNavigation extends LitElement {
  static styles = css`
    :host{
      display: none;
      gap: 8px;
      height: 100%;
    }
  `;

  @queryAssignedElements({ flatten: true, slot: 'rail' })
  protected readonly rail: TNavigationRail[];

  @queryAssignedElements({ flatten: true, slot: 'drawer' })
  protected readonly drawer: TNavigationDrawer[];

  @property({ type: String }) url = '';

  @property({ type: Boolean, reflect: true }) reactive = false;

  navRail: TNavigationRail;
  navDrawer: TNavigationDrawer;


  /**
    * This is needed to allow children to mount/render/update (i.e. run their logic) before parent accesses their computed properties
    * Rendering order mainly an issue when using browser forward/back button (i.e popstate)
  **/
  async getUpdateComplete() {
    await super.getUpdateComplete();

    // `@queryAssignedElements` are run when accessed 
    this.layout()

    // updateComplete -> when getUpdateComplete resolves a promise
    await this.navRail.updateComplete;
    await this.navDrawer.updateComplete;

    return true;
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<TNavigation>) {
    super.firstUpdated(_changedProperties);

    // getUpdateComplete logic defined above
    await this.updateComplete;

    if (this.reactive) {
      this.updateURL();
    }
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('url') && this.url !== "") {
      this.navRail.url = this.getRootNodeUrl(this.url);
      this.navDrawer.url = this.url;
    }
  }


  /**
    * Public Functions
  **/

  layout() {
    if (!this.rail) return;
    if (!this.drawer) return;

    if (this.rail.length === 1) this.navRail = this.rail[0];
    if (this.drawer.length === 1) this.navDrawer = this.drawer[0];
  }


  splitLeafUrl(url: string): string[] {
    const trimmedUrl = url.replace(/^\/|\/$/g, '');
    const words = trimmedUrl.split('/');

    if (words.length === 1 && words[0] === "") {
      return ['/']
    }
    return words
  }

  getRootNodeUrl(url: string): string {
    const urls = this.splitLeafUrl(url);
    if (!urls || urls.length <= 0) return '';

    return urls[0];
  }

  getBrowerHistory() {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath;
  }

  updateURL() {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    this.url = cleanPath;
  }

  separateURL(url: string): string[] {
    const trimmedUrl = url.replace(/^\/|\/$/g, '');
    const words = trimmedUrl.split('/');
    if (words.length === 1 && words[0] === '') {
      return ['/'];
    }
    return words;
  }

  handleRailInteraction(event: Event) {
    const target = event.target as ListItem;
    const href = target.href;
    this.navDrawer.url = href;
  }

  render() {
    return html`
      <slot name="rail" @request-activation=${this.handleRailInteraction}></slot>
      <slot name="drawer"></slot>
    `
  }
}

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

  protected firstUpdated(_changedProperties: PropertyValueMap<TNavigation>): void {
    super.firstUpdated(_changedProperties);
    this.layout();
    if (this.reactive === true) {
      this.detectNavigation();
      window.addEventListener('popstate', this.detectNavigation);
    }
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('url')) {
      this.navRail.url = this.getRootNodeUrl(this.url);
      this.navDrawer.url = this.url;
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

  protected getRootNodeUrl(url: string): string {
    const urls = this.splitLeafUrl(url);
    if (!urls || urls.length <= 0) return '';

    return urls[0];
  }

  getBrowerHistory() {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath;
  }

  detectNavigation() {
    this.url = this.getBrowerHistory();
  }

  protected separateURL(url: string): string[] {
    const trimmedUrl = url.replace(/^\/|\/$/g, '');
    const words = trimmedUrl.split('/');
    if (words.length === 1 && words[0] === '') {
      return ['/'];
    }
    return words;
  }

  protected layout() {
    if (!this.rail) return;
    if (!this.drawer) return;

    if (this.rail.length === 1) this.navRail = this.rail[0];
    if (this.drawer.length === 1) this.navDrawer = this.drawer[0];
  }

  protected handleRailInteraction(event: Event) {
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

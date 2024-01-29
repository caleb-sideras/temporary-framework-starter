import { PropertyValueMap, html, LitElement, css } from "lit";
import { queryAssignedElements, customElement, property } from "lit/decorators.js";
import { TNavigationContainer } from "./t-mobile-navigation-container";
import { TNavigationRail } from "./t-navigation-rail";
import { TNavigationDrawer } from "./t-navigation-drawer";
import { TListItem } from "./t-list";

/**
 * NOTE
 * I will learn Google's scss styling later & attempt to fix the spaghetti styling below
 */
@customElement('t-navigation')
export class TNavigation extends LitElement {

  static styles = css`
    :host{
      display: flex;
      height: 100%;
      gap: 8px;
    }
    .t-navigation-rail-container{
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      background: var(--md-sys-color-secondary);
    }
  `

  @queryAssignedElements({ flatten: true, slot: 'rail' })
  protected railItems!: Array<TNavigationRail>;

  @queryAssignedElements({ flatten: true, slot: 'drawer' })
  protected drawerItems!: Array<TNavigationDrawer>;

  public rail: TNavigationRail;
  public drawers: TNavigationDrawer[] = [];

  public railAttribute: string = 't-navigation-rail';
  public drawerAttribute: string = 't-navigation-drawer';

  @property({ type: String }) url = '';

  connectedCallback(): void {
    super.connectedCallback();

    let mainElement = document.querySelector("main");
    if (!mainElement) return;

    mainElement.addEventListener("htmx:beforeRequest", (e: Event) => { this.htmxReValidate(e) });
  }

  disconnectedCallback(): void {
    super.connectedCallback();

    let mainElement = document.querySelector("main");
    if (!mainElement) return;

    mainElement.removeEventListener("htmx:beforeRequest", (e: Event) => { this.htmxReValidate(e) });
  }

  /**
  * Temp fix while HTMX doesnt support shadowDOM
  */
  private htmxReValidate(event: any) {
    const target = event.target;

    if (target.hasAttribute("hx-push-url") && target.getAttribute("hx-push-url") === 'true') {
      /**
        * NOTE
        * Temp fix while shadowDOM is broken
      **/
      // this.url = target.getAttribute("href") as string;
      this.url = target.getAttribute("hx-get") as string;
      this.initRail();
      this.initDrawers();
    };
  }

  /**
    * This is needed to allow children to mount/render/update (i.e. run their logic) before parent accesses their computed properties
    * Rendering order mainly an issue when using browser forward/back button (i.e popstate)
    */
  async getUpdateComplete() {
    await super.getUpdateComplete();

    this.layout()

    // TODO: below fails if layout isnt properly inited
    await this.rail.updateComplete;
    await Promise.all(this.drawers.map(c => c.updateComplete));
    return true;
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<TNavigation>) {
    super.firstUpdated(_changedProperties);

    await this.updateComplete;

    this.updateURL();
    this.initRail();
    this.initDrawers();

  }

  /**
    * Layout Init
    */
  layout() {
    if (
      !this.railItems ||
      !this.drawerItems ||
      this.railItems.length > 1 ||
      !this.isMobileNaviationRail(this.railItems[0]) ||
      !this.areMobileNaviationDrawers(this.drawerItems)
    ) return;

    this.rail = this.railItems[0];
    this.drawers = this.drawerItems;
  }

  protected initDrawers() {
    this.deactivateDrawers();
    for (const drawer of this.drawers) {
      const matchingItem = drawer.listController.getListItem(this.url);
      if (matchingItem) {
        drawer.revalidateFromUrl(this.url);
        this.activateItem(drawer);
        return;
      }
    }
  }

  protected isMobileNaviationRail(rail: TNavigationRail): boolean {
    return rail.localName === this.railAttribute;
  }

  protected areMobileNaviationDrawers(drawers: TNavigationDrawer[]): boolean {
    return drawers.some(drawer => drawer.localName === this.drawerAttribute);
  }

  /**
    * Event Handlers
    */
  onActivateDrawer(e: Event) {
    this.deactivateDrawers();
    const item = e.target as TListItem;
    for (const drawer of this.drawers) {
      const matchingItem = drawer.listController.getListItem(item.href);
      if (matchingItem) {
        drawer.revalidateFromUrl(item.href);
        this.activateItem(drawer);
        return;
      }
    }
    /**
    * NOTE: Once HTMX supports the shadowDOM and we can remove hx-get; this will need a redesign
    */
  }

  /**
    * Drawers Handlers
    */
  initRail() {
    const listItem = this.rail.listController.getListItem(this.url);
    if (listItem) this.rail.listController.requestHighlight(listItem);
  }

  activateRail() {
    this.activateItem(this.rail);
  }

  /**
    * Drawers Handlers
    */
  deactivateDrawers() {
    this.drawers.map((drawer) => this.deactivateItem(drawer));
  }

  activateDrawers() {
    this.drawers.map((drawer) => this.activateItem(drawer));
  }

  private deactivateItem(item: TNavigationContainer) {
    item.active = false;
  }

  private activateItem(item: TNavigationContainer) {
    item.active = true;
  }

  /** 
  * Universal Functions
  */
  updateURL() {
    this.url = this.getURL();
  }

  getURL(): string {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath;
  }

  // getRootNodeUrl(url: string): string {
  //   const urls = this.splitLeafUrl(url);
  //   if (!urls || urls.length <= 0) return '';

  //   return urls[0];
  // }

  splitLeafUrl(url: string): string[] {
    const trimmedUrl = url.replace(/^\/|\/$/g, '');
    const words = trimmedUrl.split('/');

    if (words.length === 1 && words[0] === "") {
      return ['/']
    }
    return words
  }

  override render() {
    return html`  
      <div class="t-navigation-rail-container">
        <slot name="rail" @request-activation="${this.onActivateDrawer}"></slot>
        <slot name="footer"></slot>
      </div>
      <slot name="drawer"></slot>        
    `
  }
}

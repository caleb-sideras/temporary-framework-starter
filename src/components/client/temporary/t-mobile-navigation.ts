import { MdNavigationDrawerModal } from "@material/web/labs/navigationdrawer/navigation-drawer-modal";
import { PropertyValueMap, html, css, nothing } from "lit";
import { queryAssignedElements, customElement } from "lit/decorators.js";
import { ARIAMixinStrict } from '@material/web/internal/aria/aria.js';
import { TNavigationContainer } from "./t-mobile-navigation-container";
import { TMobileNavigationRail } from "./t-mobile-navigation-rail";
import { TMobileNavigationDrawer } from "./t-mobile-navigation-drawer";
import { TListItem } from "./t-list";
import { NavigationDrawerModal } from "@material/web/labs/navigationdrawer/internal/navigation-drawer-modal";

/**
 * NOTE
 * I will learn Google's scss styling later & attempt to fix the spaghetti styling below
 * BUG
 * Mobile navigation drawer/rail do not revalidate on browser 'popstate' events. They only revalidate on user interaction. Issues can arise then routes can hx-get or hx-boost pages (returns body) and the drawer/rail doesn't update 
 */
@customElement('t-mobile-navigation')
export class TMobileNavigation extends MdNavigationDrawerModal {
  static styles = [
    ...MdNavigationDrawerModal.styles,
    css`
      :host{  
        --md-navigation-drawer-modal-container-shape: 0px;
      }
      .md3-navigation-drawer-modal__slot-content{
        margin: 16px 0 auto;
      }
      .md3-navigation-drawer-modal__slot-icon{
        margin-bottom: 8px;
        margin-left: 26px;
      }
      .md3-navigation-drawer-modal__slot-lists{
        margin: 0 8px;
      }
      .md3-navigation-drawer-modal--scrim-visible{
        z-index: 1;
      }
      .md3-navigation-drawer-modal{
        z-index: 2;
      }
    `,
  ]

  @queryAssignedElements({ flatten: true, slot: 'rail' })
  protected railItems!: Array<TMobileNavigationRail>;

  @queryAssignedElements({ flatten: true, slot: 'drawer' })
  protected drawerItems!: Array<TMobileNavigationDrawer>;

  public rail: TMobileNavigationRail;
  public drawers: TMobileNavigationDrawer[] = [];

  public railAttribute: string = 't-mobile-navigation-rail';
  public drawerAttribute: string = 't-mobile-navigation-drawer';

  /**
    * This is needed to allow children to mount/render/update (i.e. run their logic) before parent accesses their computed properties
    * Rendering order mainly an issue when using browser forward/back button (i.e popstate)
    */
  async getUpdateComplete() {
    await super.getUpdateComplete();

    // `@queryAssignedElements` are run when accessed 
    this.layout()

    // TODO: below fails if layout isnt properly inited
    await this.rail.updateComplete;
    await Promise.all(this.drawers.map(c => c.updateComplete));
    return true;
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<TMobileNavigation>) {
    super.firstUpdated(_changedProperties);

    await this.updateComplete;

    // TODO: refactor this so that if there is match in drawers, it'll be inited
    this.onActivateRail();
  }

  protected updated(changedProperties: PropertyValueMap<NavigationDrawerModal>): void {
    if (changedProperties.has('opened')) {
      if (this.opened) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
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

  protected isMobileNaviationRail(rail: TMobileNavigationRail): boolean {
    return rail.localName === this.railAttribute;
  }

  protected areMobileNaviationDrawers(drawers: TMobileNavigationDrawer[]): boolean {
    return drawers.some(drawer => drawer.localName === this.drawerAttribute);
  }

  /**
    * Event Handlers
    */
  onActivateDrawer(e: Event) {
    const item = e.target as TListItem;
    for (const drawer of this.drawers) {

      // Checks if we need to open a drawer
      const matchingItem = drawer.listController.getListItem(item.href);
      // If we do, use brower state to current item
      if (matchingItem) {
        drawer.revalidateFromBrower();
        this.deactivateRail();
        this.activateItem(drawer);
        return;
      }
    }
    /**
    * In the event there is no drawer found, we close the modal
    * NOTE: Once HTMX supports the shadowDOM and we can remove hx-get; this will need a redesign
    */
    this.closeModal();
  }

  onActivateRail() {
    this.deactivateDrawers();
    this.rail.revalidateFromUrl(this.getURL());
    this.activateItem(this.rail);
  }

  onActivateItem(item: TNavigationContainer) {
    this.deactivateItems();
    this.activateItem(item);
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

  /**
    * Rail Handlers
    */
  activateRail() {
    this.activateItem(this.rail);
  }

  deactivateRail() {
    this.deactivateItem(this.rail);
  }

  /**
    * Modal Hanlders
    */
  closeModal() {
    this.opened = false;
  }

  openModal() {
    this.opened = true;
  }

  /**
    * Universal Handlers
    */
  deactivateItems() {
    this.deactivateRail();
    this.deactivateDrawers();
  }

  private deactivateItem(item: TNavigationContainer) {
    item.active = false;
  }

  private activateItem(item: TNavigationContainer) {
    item.active = true;
  }

  /**
    * URL Handlers
    */

  getURL(): string {
    const path = window.location.pathname;
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath;
  }

  getRootNodeUrl(url: string): string {
    const urls = this.splitLeafUrl(url);
    if (!urls || urls.length <= 0) return '';

    return urls[0];
  }

  splitLeafUrl(url: string): string[] {
    const trimmedUrl = url.replace(/^\/|\/$/g, '');
    const words = trimmedUrl.split('/');

    if (words.length === 1 && words[0] === "") {
      return ['/']
    }
    return words
  }

  protected override render() {
    const ariaExpanded = this.opened ? 'true' : 'false';
    const ariaHidden = !this.opened ? 'true' : 'false';
    // Needed for closure conformance
    const { ariaLabel, ariaModal } = this as ARIAMixinStrict;
    return html`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${ariaExpanded}
        aria-hidden=${ariaHidden}
        aria-label=${ariaLabel || nothing}
        aria-modal=${ariaModal || nothing}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"
        ><div class="md3-elevation-overlay"></div>
        <div class="md3-navigation-drawer-modal__slot-content">       		
      		<md-icon class="material-symbols-filled md3-navigation-drawer-modal__slot-icon" @click="${this.closeModal}">menu_open</md-icon>
          <div class="md3-navigation-drawer-modal__slot-lists">
            <slot name="rail" @request-activation="${this.onActivateDrawer}" @close-navigation="${this.closeModal}"></slot>
            <slot name="drawer" @activate-rail="${this.onActivateRail}" @request-activation="${this.closeModal}"></slot>        
          </div>
        </div>
      </div>
    `;
  }
}

import { MdNavigationDrawerModal } from "@material/web/labs/navigationdrawer/navigation-drawer-modal";
import { PropertyValueMap, html, nothing } from "lit";
import { queryAssignedElements, customElement } from "lit/decorators.js";
import { ARIAMixinStrict } from '@material/web/internal/aria/aria.js';
import { ListItem } from "./internal/t-list";
import { TMobileNavigationRail } from "./t-mobile-navigation-rail";
import { TMobileNavigationDrawer } from "./t-mobile-navigation-drawer";
import { TMobileNavigationContainer } from "./t-mobile-navigation-container";

type Item = TMobileNavigationRail | TMobileNavigationDrawer;

@customElement('t-mobile-navigation')
export class TMobileNavigation extends MdNavigationDrawerModal {

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

    // updateComplete -> when getUpdateComplete resolves a promise
    await this.rail.updateComplete;
    await Promise.all(this.drawers.map(c => c.updateComplete));
    return true;
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<TMobileNavigation>) {
    super.firstUpdated(_changedProperties);

    await this.updateComplete;

    // init
    this.closeModal();
    this.activateRail();
    this.drawers.map((drawer) => drawer.active = false);
  }


  /**
    * Layout Init
    */
  layout() {
    if (!this.railItems || this.railItems.length > 1) return;
    if (!this.drawerItems) return;

    type MobileItem = Extract<Item, TMobileNavigationContainer>;
    const mobileItems = [...this.railItems, ...this.drawerItems].filter(this.isMobileNavigationContainer) as MobileItem[];

    this.rail = mobileItems[0];
    this.drawers.push(...mobileItems.slice(1) as TMobileNavigationDrawer[]);
  }

  isMobileNavigationContainer(item: Item): item is TMobileNavigationContainer {
    return item.localName === 't-mobile-navigation-rail' || item.localName === 't-mobile-navigation-drawer';
  }

  /**
    * Event Handlers
    */
  onActivateDrawer(e: Event) {
    const item = e.target as ListItem;
    for (const drawer of this.drawers) {
      const hasMatching = drawer.findMatchingParentItem(item.href, drawer.items as ListItem[]);
      if (hasMatching) {
        this.onActivateItem(drawer);
        return;
      }
    }
  }

  onActivateRail() {
    this.deactivateDrawers();
    this.activateItem(this.rail);
  }

  onActivateItem(item: TMobileNavigationContainer) {
    this.deactivateItems();
    this.activateItem(item);
  }


  /**
    * Drawers Handlers
    */
  deactivateDrawers() {
    this.drawers.map((drawer) => this.deactivateItem(drawer));
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
    * Modals Hanlders
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

  private deactivateItem(item: TMobileNavigationContainer) {
    item.active = false;
  }

  private activateItem(item: TMobileNavigationContainer) {
    item.active = true;
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
          <slot name="rail" @request-activation="${this.onActivateDrawer}" @close-navigation="${this.closeModal}"></slot>
          <slot name="drawer" @request-activation="${this.closeModal}" @activate-rail="${this.onActivateRail}" @close-navigation="${this.closeModal}"></slot>
        </div>
      </div>
    `;
  }

}

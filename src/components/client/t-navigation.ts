import { html, css, LitElement, PropertyValueMap } from "lit";
import { queryAssignedElements, customElement } from "lit/decorators.js";
import { TNavigationRail } from "./t-navigation-rail";
import { TNavigationDrawer } from "./t-navigation-drawer";

@customElement('t-navigation')
export class TNavigation extends LitElement {
  static styles = css`
    :host{
      display: flex;
      gap: 8px;
    }
  `;

  @queryAssignedElements({ flatten: true })
  protected readonly items: any[];

  navRail: TNavigationRail;
  navDrawers: TNavigationDrawer[] = [];

  protected firstUpdated(_changedProperties: PropertyValueMap<TNavigation>): void {
    super.firstUpdated(_changedProperties);
    this.layout();
    this.setDrawerIndex();
  }

  layout() {
    if (!this.items) return;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      switch (item.localName) {
        case "t-navigation-rail":
          this.navRail = item as TNavigationRail;
          break;
        case "t-navigation-drawer":
          this.navDrawers.push(item as TNavigationDrawer);
          break;
        default:
          break;
      }
    }
  }

  setDrawerIndex() {
    if (!this.navDrawers) return;

    for (let i = 0; i < this.navDrawers.length; i++) {
      this.navDrawers[i].parentIndex = i;
    }

  }

  handleRailInteraction(event: CustomEvent) {
    for (let i = 0; i < this.navDrawers.length; i++) {
      this.navDrawers[i].activeId = event.detail.state.id;
    }
  }

  handleDrawerInteraction(event: CustomEvent) {
    const itemId = event.detail.state.id;
    const parentIndex = event.detail.parentIndex + 1;

    if (parentIndex >= this.navDrawers.length) return;
    for (let i = parentIndex; i < this.navDrawers.length; i++) {
      this.navDrawers[i].activeId = itemId;
    }
  }

  render() {
    return html`
      <slot 
        @t-rail-interaction=${this.handleRailInteraction}
        @t-drawer-interaction=${this.handleDrawerInteraction}
      >
      </slot>
      `
  }
}

import { html, css, LitElement, PropertyValueMap } from "lit";
import { queryAssignedElements, customElement } from "lit/decorators.js";
import { TNavigationRail } from "./t-navigation-rail";
import { TNavigationDrawer } from "./t-navigation-drawer";

@customElement('t-navigation')
export class TNavigation extends LitElement {
  static styles = css`
    :host{
      display: flex;
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
    console.log(this.navRail)
    console.log(this.navDrawers)
  }

  setDrawerIndex() {
    console.log("setDrawerIndex")
    if (!this.navDrawers) return;

    for (let i = 0; i < this.navDrawers.length; i++) {
      this.navDrawers[i].parentIndex = i;
      console.log(this.navDrawers[i].parentIndex, i)
    }

  }

  handleRailInteraction(event: CustomEvent) {
    console.log("handleRailInteraction")
    for (let i = 0; i < this.navDrawers.length; i++) {
      this.navDrawers[i].activeId = event.detail.state.id;
    }
  }

  handleDrawerInteraction(event: CustomEvent) {
    const id = event.detail.state.id;
    const index = event.target?.parentIndex as number;

    console.log("handleDrawerInteraction", index, id)
    if (index >= this.navDrawers.length) return;
    for (let i = index + 1; i < this.navDrawers.length; i++) {
      this.navDrawers[i].activeId = id;
    }
  }

  testing(e: CustomEvent) {
    console.log("parentState", e.detail.state)
    console.log("parentDetail", e.detail)
    console.log("parent", e)
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

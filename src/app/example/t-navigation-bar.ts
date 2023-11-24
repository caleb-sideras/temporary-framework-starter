import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { MdNavigationTab } from '@material/web/labs/navigationtab/navigation-tab.js';
import { TNavigationBarMain } from './t-navigation-bar-main';

import { MdNavigationDrawerModal } from '@material/web/labs/navigationdrawer/navigation-drawer-modal.js';
import { NavigationBarState } from '@material/web/labs/navigationbar/internal/state.js';
import { NavigationTabInteractionEvent } from '@material/web/labs/navigationbar/internal/constants.js';

@customElement('t-navigation-bar')
export class TNavigationBar extends LitElement {

  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  tabs: MdNavigationTab[] = [];

  @queryAssignedElements({ flatten: true, slot: 'main' })
  private readonly navBar1!: VerticalNavigationBar[];

  @queryAssignedElements({ flatten: true, slot: 'sub' })
  private readonly drawerElement!: MdNavigationDrawerModal[];

  protected override updated(changedProperties: PropertyValues<TNavigationBar>) {
    if (this.navBar1.length > 0) {
      this.navBar1[0].activeIndex = this.activeIndex
    }

    // if  (changedProperties.has('activeIndex')) {
    // this.layout()
    // this.onActiveIndexChange(this.activeIndex);
    // }

    // if (changedProperties.has('tabs')) {
    // this.onActiveIndexChange(this.activeIndex);
    // }
  }

  // @navigation-tab-rendered=${this.handleNavigationTabConnected}
  render() {
    return html`<div>
      <slot @navigation-bar-main="${this.handleNavigationTabInteraction}" name="main"></slot>
      <slot name="sub"></slot>
      </div>`;
  }

  // connectedCallback() {
  //   super.connectedCallback()
  //   addEventListener('navigation-bar-activated', (event: CustomEvent) => {
  //     console.log('Received navigation-bar-activated event:', event.detail);
  //   });
  // }

  // disconnectedCallback() {
  //   super.disconnectedCallback()
  //   window.removeEventListener('navigation-bar-activated', (event: CustomEvent) => {
  //     console.log('Received navigation-bar-activated event:', event.detail);
  //   });
  // }

  layout() {
    // if (!this.tabsElement) return;
    // const navTabs: MdNavigationTab[] = [];
    // for (const node of this.tabsElement) {
    //   navTabs.push(node);
    // }
    // this.tabs = navTabs;
  }

  private handleNavigationTabInteraction(event: CustomEvent) {
    this.activeIndex = event.detail.activeIndex;
    console.log("navigation-bar-main", this.activeIndex)
  }

  private onActiveIndexChange(value: number) {
    if (!this.tabs[value]) {
      throw new Error('NavigationBar Init: activeIndex is out of bounds.');
    }
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].active = i === value;
    }
  }

  private onHideInactiveLabelsChange(value: boolean) {
    for (const tab of this.tabs) {
      tab.hideInactiveLabel = value;
    }
  }

  // // checks if newly rendered tab is in list, if not calls layout()
  // private handleNavigationTabConnected(event: CustomEvent) {
  //   const target = event.target as MdNavigationTab;
  //   if (this.tabs.indexOf(target) === -1) {
  //     this.layout();
  //   }
  // }
}

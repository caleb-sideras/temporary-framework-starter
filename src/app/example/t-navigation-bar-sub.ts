import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { MdNavigationTab } from '@material/web/labs/navigationtab/navigation-tab.js';
import { MdNavigationDrawerModal } from '@material/web/labs/navigationdrawer/navigation-drawer-modal.js';

import { NavigationBarState } from '@material/web/labs/navigationbar/internal/state.js';
import { NavigationTabInteractionEvent } from '@material/web/labs/navigationbar/internal/constants.js';

@customElement('t-navigation-bar-sub')
export class TNavigationBarSub extends LitElement {

  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  modals: MdNavigationDrawerModal[] = [];

  @queryAssignedElements({ flatten: true })
  private readonly tabsElement!: MdNavigationDrawerModal[];

  protected override updated(changedProperties: PropertyValues<TNavigationBarSub>) {
    if (changedProperties.has('activeIndex')) {
      // this.layout()
      // this.onActiveIndexChange(this.activeIndex);
      // this.dispatchEvent(
      //   new CustomEvent('navigation-bar-2-activated', {
      //     detail: {
      //       tab: this.tabs[this.activeIndex],
      //       activeIndex: this.activeIndex,
      //     },
      //     bubbles: true,
      //     composed: true,
      //   }),
      // );
    }

    // if (changedProperties.has('hideInactiveLabels')) {
    //   this.onHideInactiveLabelsChange(this.hideInactiveLabels);
    // }

    // if (changedProperties.has('tabs')) {
    //   this.onHideInactiveLabelsChange(this.hideInactiveLabels);
    //   this.onActiveIndexChange(this.activeIndex);
    // }
  }

  // @navigation-tab-rendered=${this.handleNavigationTabConnected}
  render() {
    return html`<div
          role="tablist"
          @navigation-tab-interaction="${this.handleNavigationTabInteraction}" 
        >
      <slot></slot>
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
    if (!this.tabsElement) return;
    const navTabs: MdNavigationTab[] = [];
    for (const node of this.tabsElement) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }

  private handleNavigationTabInteraction(event: NavigationTabInteractionEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state as MdNavigationTab)
    if (this.activeIndex != currIndex) {
      this.activeIndex = currIndex;
    }
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

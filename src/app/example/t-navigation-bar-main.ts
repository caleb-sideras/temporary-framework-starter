import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { TNavigationTab } from './t-navigation-tab';

import { NavigationBarState } from '@material/web/labs/navigationbar/internal/state.js';
import { NavigationTabInteractionEvent } from '@material/web/labs/navigationbar/internal/constants.js';

export type ListItemType = 'text' | 'button' | 'link';

@customElement('t-navigation-bar-main')
export class TNavigationBarMain extends LitElement implements NavigationBarState {
  static styles = css`
    :host {
      display: none;
      width: 6rem; 
      height: 100vh;
      background-color: var(--md-sys-color-surface-2); 
      justify-content: center;
      padding-top: 1rem;

    }

    @media ( min-width: 1024px) {     
     :host {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;
        display: flex;
      }
    }
  `
  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @property({ type: Boolean, attribute: 'hide-inactive-labels' })
  hideInactiveLabels = false;

  tabs: TNavigationTab[] = [];

  @queryAssignedElements({ flatten: true })
  private readonly tabsElement!: TNavigationTab[];

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TNavigationBarMain>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
      this.dispatchEvent(
        new CustomEvent('navigation-bar-main', {
          detail: {
            tab: this.tabs[this.activeIndex],
            activeIndex: this.activeIndex,
          },
          bubbles: true,
          composed: true,
        }),
      );
    }

    if (changedProperties.has('hideInactiveLabels')) {
      this.onHideInactiveLabelsChange(this.hideInactiveLabels);
    }

    if (changedProperties.has('tabs')) {
      this.onHideInactiveLabelsChange(this.hideInactiveLabels);
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  // @navigation-tab-rendered=${this.handleNavigationTabConnected}
  render() {
    return html`
      <div
        role="tablist"
        @navigation-tab-interaction="${this.handleNavigationTabInteraction}"
      >
      <slot></slot>
      </div>
      `;
  }

  layout() {
    if (!this.tabsElement) return;
    const navTabs: TNavigationTab[] = [];
    for (const node of this.tabsElement) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }

  private handleNavigationTabInteraction(event: NavigationTabInteractionEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state as TNavigationTab)
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
}

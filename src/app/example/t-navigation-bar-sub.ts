import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';
import { MdNavigationTab } from '@material/web/labs/navigationtab/navigation-tab.js';
import { MdNavigationDrawerModal } from '@material/web/labs/navigationdrawer/navigation-drawer-modal.js';

import { NavigationBarState } from '@material/web/labs/navigationbar/internal/state.js';
import { NavigationTabInteractionEvent } from '@material/web/labs/navigationbar/internal/constants.js';
import { TList } from './t-list';

@customElement('t-navigation-bar-sub')
export class TNavigationBarSub extends LitElement {

  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @queryAssignedElements({ flatten: true })
  private readonly tabsElement!: TList[];

  tLists: TList[] = [];
  modalRef: Ref<MdNavigationDrawerModal> = createRef();

  protected override updated(changedProperties: PropertyValues<TNavigationBarSub>) {
    if (changedProperties.has('activeIndex')) {
      // fix this.layout() invoked everytime
      this.layout()
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  // @navigation-tab-rendered=${this.handleNavigationTabConnected}
  render() {
    return html`
      <div class="hidden lg:flex h-screen fixed">
        <md-navigation-drawer-modal ${ref(this.modalRef)} pivot="start" active-index="0">
        <slot></slot>
        </md-navigation-drawer-modal>
      </div>
      `;
  }

  layout() {
    if (!this.tabsElement) return;
    const navTabs: TList[] = [];
    for (const node of this.tabsElement) {
      navTabs.push(node);
    }
    this.tLists = navTabs;
  }

  private onActiveIndexChange(value: number) {
    if (!this.tLists[value]) {
      throw new Error('NavigationBarSub: activeIndex is out of bounds.');
    }
    console.log(this.modalRef)
    console.log("this.modalRef.value?.opened", this.modalRef.value?.opened)
    console.log("this.tLists[value].tabs.length", this.tLists[value].tabs.length)

    // weird syntax to stop the LSP from complaining
    if (this.modalRef.value?.opened === true && this.tLists[value].tabs.length < 0) {
      this.modalRef.value.opened = false;
    } else if (this.modalRef.value?.opened === false && this.tLists[value].tabs.length > 0) {
      this.modalRef.value.opened = true;
    }

    for (let i = 0; i < this.tLists.length; i++) {
      this.tLists[i].hideInactiveList = !(i === value);
    }
  }

}

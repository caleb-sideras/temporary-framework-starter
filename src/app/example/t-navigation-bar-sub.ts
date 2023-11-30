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
    :host{
      display: none;  
    }
    @media (min-width: 1024px) {
      :host{
        display: flex;
        height: 100vh;
      }
    }
  
    .modal-wrap{
      position: fixed !important;
      height: 100vh;
    }
  `;

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @queryAssignedElements({ flatten: true })
  private readonly tabsElement!: TList[];

  tLists: TList[] = [];
  modalRef: Ref<MdNavigationDrawerModal> = createRef();

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TNavigationBarSub>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  render() {
    return html`
      <div class="modal-wrap">
        <md-navigation-drawer-modal ${ref(this.modalRef)} pivot="start" active-index="0" role="presentation">
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

    // Init the list for opening -> activeIndex to 0
    this.updateLists(value)

    // If open && next tab !have children -> close
    if (this.modalRef.value?.opened === true && this.tLists[value].tabs.length <= 0) {
      this.modalRef.value.opened = false;
    }
    // If closed && next tab has children -> open
    else if (this.modalRef.value?.opened === false && this.tLists[value].tabs.length > 0) {
      this.modalRef.value.opened = true;
    }
  }

  private updateLists(value: number) {
    for (let i = 0; i < this.tLists.length; i++) {
      this.tLists[i].initList = i === value;
    }
  }
}

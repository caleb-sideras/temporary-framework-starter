import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';
import { MdNavigationDrawerModal } from '@material/web/labs/navigationdrawer/navigation-drawer-modal.js';
// import { TNavigationList } from './t-navigation-list2';
import { TNavigationList } from './t-navigation-list';

@customElement('t-navigation-drawer')
export class TNavigationDrawer extends LitElement {

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
  private readonly tabsElement!: TNavigationList[];

  tNavLists: TNavigationList[] = [];
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
    const navTabs: TNavigationList[] = [];
    for (const node of this.tabsElement) {
      navTabs.push(node);
    }
    this.tNavLists = navTabs;
  }

  private onActiveIndexChange(value: number) {
    if (!this.tNavLists[value]) {
      throw new Error('NavigationBarSub: activeIndex is out of bounds.');
    }

    // Init the list for opening -> activeIndex to 0
    this.updateLists(value)

    // If open && next tab !have children -> close
    if (this.modalRef.value?.opened === true && this.tNavLists[value].tabs.length <= 0) {
      this.modalRef.value.opened = false;
    }
    // If closed && next tab has children -> open
    else if (this.modalRef.value?.opened === false && this.tNavLists[value].tabs.length > 0) {
      this.modalRef.value.opened = true;
    }
  }

  private updateLists(value: number) {
    for (let i = 0; i < this.tNavLists.length; i++) {
      this.tNavLists[i].initList= i === value;
    }
  }
}

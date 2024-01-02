import { PropertyValues, html, css } from 'lit';
import { MdList } from '@material/web/list/list';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { TListItem } from './t-list-item';
import { classMap } from 'lit/directives/class-map.js';
import { TDropdown } from './t-dropdown';

@customElement('t-navigation-list')
export class TNavigationList extends MdList {

  static styles = [
    css`
    :host{
      padding: 0px !important;
      --md-list-container-color: var(--md-sys-color-secondary);
      background: var(--md-list-container-color)
    }

    .list-wrap{
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 16px;
    }

    .visible{
      display: block;
    }

    .hidden{
      display: none;
    }
  `,
    ...MdList.styles
  ]

  // active index of t-list-item
  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  // whether to click the initial active-index t-list-element in the list
  @property({ type: Boolean, attribute: 'init-list' }) initList = false;

  @queryAssignedElements({ flatten: true })
  protected override readonly slotItems!: (TListItem | TDropdown)[];

  tabs: (TListItem | TDropdown)[] = [];

  INITIAL_INDEX: number

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
    this.INITIAL_INDEX = this.activeIndex
  }

  protected override updated(changedProperties: PropertyValues<TNavigationList>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
    }

    // on initList, the list will be visible and the first t-list-item called
    if (changedProperties.has('initList')) {
      if (this.initList) this.handleInitList()
    }
  }

  protected override render() {

    return html`
      <div 
      @list-item-interaction=${this.handleListItemInteraction}
      class="list-wrap ${classMap(this.getRenderClasses())}"
      >
        ${super.render()}
      </div>
    `
  }

  private getRenderClasses() {
    return {
      'hidden': !this.initList,
      'visible': this.initList,
    };
  }

  layout() {
    console.log(this.slotItems)
    if (!this.slotItems) return;
    const navTabs: TListItem | (HTMLElement & { item?: TListItem })[] = [];
    for (const node of this.slotItems) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }

  private handleInitList() {
    if (!this.tabs[this.INITIAL_INDEX]) return
    this.tabs[this.INITIAL_INDEX].click()
  }

  private handleListItemInteraction(event: CustomEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state as TListItem);
    if (this.activeIndex != currIndex) { this.activeIndex = currIndex; }
  }

  private onActiveIndexChange(value: number) {
    if (value === -1) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i]) { this.tabs[i].active = false; }
      }
      return
    }

    if (!this.tabs[value]) {
      return
    }

    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i]) { this.tabs[i].active = i === value; }
    }
  }
}

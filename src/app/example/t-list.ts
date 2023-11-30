import { PropertyValues, html, css } from 'lit';
import { MdList } from '@material/web/list/list';
import { customElement, property } from 'lit/decorators.js';
import { TListItem } from './t-list-item';
import { classMap } from 'lit/directives/class-map.js';

@customElement('t-list')
export class TList extends MdList {

  static styles = [
    css`
    :host{
      padding: 0px !important;
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

  tabs: TListItem[] | (HTMLElement & { item?: TListItem })[] = [];

  INITIAL_INDEX: number

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
    this.INITIAL_INDEX = this.activeIndex
  }

  protected override updated(changedProperties: PropertyValues<TList>) {
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
    if (!this.slotItems) return;
    const navTabs: TListItem | (HTMLElement & { item?: TListItem })[] = [];
    for (const node of this.slotItems) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }


  // TODO: Not sure why Material 3 team checks for child render
  // @list-item-rendered=${this.handleListItemConnected}
  // private handleListItemConnected(event: CustomEvent) {
  //   const target = event.target as TListItem;
  //   if (this.tabs.indexOf(target) === -1) {
  //     console.log("T-List -> Child Connected", target)
  //     this.layout();
  //   }
  // }

  private handleInitList() {
    if (!this.tabs[this.INITIAL_INDEX]) return
    this.tabs[this.INITIAL_INDEX].click()
  }

  private handleListItemInteraction(event: CustomEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state as TListItem);
    if (this.activeIndex != currIndex) {
      this.activeIndex = currIndex;
    }
  }

  private onActiveIndexChange(value: number) {
    if (!this.tabs[value]) {
      return
    }
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] instanceof TListItem) {
        this.tabs[i].active = i === value;
      }
    }
  }
}

// MSC
// throw new Error('T-List: activeIndex is out of bounds.');

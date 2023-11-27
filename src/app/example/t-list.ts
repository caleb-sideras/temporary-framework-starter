import { PropertyValues, html, css } from 'lit';
import { MdList } from '@material/web/list/list';
import { customElement, property } from 'lit/decorators.js';
import { TListItem as ListItem } from './t-list-item';
import { TListItem } from './t-list-item'
import { classMap } from 'lit/directives/class-map.js';

@customElement('t-list')
export class TList extends MdList {

  static styles = [
    css`
    .visible{
      display: none;
    }

    .hidden{
      display: block;
    }
  `,
    ...MdList.styles
  ]

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @property({ type: Boolean, attribute: 'hide-inactive-list' }) hideInactiveList = true;

  tabs: ListItem[] | (HTMLElement & { item?: ListItem })[] = [];

  protected override updated(changedProperties: PropertyValues<TList>) {
    if (changedProperties.has('activeIndex')) {
      this.layout()
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  protected override render() {

    return html`
      <div 
      @list-item-interaction=${this.handleListItemInteraction}
      class="md3-navigation-tab ${classMap(this.getRenderClasses())}"
      >
        ${super.render()}
      </div>
      `
  }

  private getRenderClasses() {
    return {
      'hidden': this.hideInactiveList,
      'visible': !this.hideInactiveList,
    };
  }

  layout() {

    if (!this.slotItems) return;
    console.log(this.slotItems)
    const navTabs: ListItem | (HTMLElement & { item?: ListItem })[] = [];
    for (const node of this.slotItems) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }

  private handleListItemInteraction(event: CustomEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state as TListItem)
    console.log("list-item-interaction", currIndex)
    if (this.activeIndex != currIndex) {
      this.activeIndex = currIndex;
    }
  }

  private onActiveIndexChange(value: number) {
    if (!this.tabs[value]) {
      throw new Error('T-List: activeIndex is out of bounds.');
    }
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] instanceof ListItem) {
        console.log(this.tabs[i], i, value)
        this.tabs[i].active = i === value;
      }
    }
  }
}


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
        background: var(--md-list-container-color); important!
        padding: 0px !important;
    }

    .list-wrap{
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 8px;
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

  @property({ type: Number, attribute: 'active-index' }) activeIndex = -1;

  @property({ type: String, attribute: 'event' }) event = "list";

  @property({ type: Boolean, reflect: true }) active = false;

  // @queryAssignedElements({ flatten: true })
  // protected override readonly slotItems!: TListItem[];
  public slotItems: any;

  public tabs: TListItem[] | (HTMLElement & { item?: TListItem })[] = [];

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TList>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  protected override render() {

    return html`
      <div 
      @${this.event}-item-interaction=${this.handleListItemInteraction}
      class="list-wrap ${classMap(this.getRenderClasses())}"
      >
        ${super.render()}
      </div>
    `
  }

  private getRenderClasses() {
    return {
      'hidden': !this.active,
      'visible': this.active,
    };
  }

  layout() {
    if (!this.slotItems) return;
    const navTabs: any = [];
    for (const node of this.slotItems) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }

  private handleListItemInteraction(event: CustomEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state);
    if (this.activeIndex == currIndex) return

    this.activeIndex = currIndex;

    this.dispatchEvent(
      new CustomEvent(`t-${this.event}-interaction`, {
        detail: { state: this },
        bubbles: true,
        composed: true,
      })
    );
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

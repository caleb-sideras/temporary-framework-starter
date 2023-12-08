import { PropertyValues, html, css } from 'lit';
import { MdList } from '@material/web/list/list';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// @customElement('t-list')
export class TList extends MdList {

  static styles = [
    css`
    :host{
        padding-bottom: 0px !important;
        padding-left: 8px !important;
        padding-right: 8px !important;
        padding-top: 8px !important;
    }
  `,
    ...MdList.styles
  ]

  @property({ type: Number, attribute: 'active-index' }) activeIndex = -1;

  @property({ type: String, attribute: 'event' }) event = "list";
  @queryAssignedElements({ flatten: true })
  protected override readonly slotItems: any[];

  public tabs: any = [];

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TList>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.event) {
      this.addEventListener(`${this.event}-item-interaction`, (e: Event) => { this.handleListItemInteraction(e as CustomEvent); });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.event) {
      this.addEventListener(`${this.event}-item-interaction`, (e: Event) => { this.handleListItemInteraction(e as CustomEvent); });
    }
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
        if ("active" in this.tabs[i]) { this.tabs[i].active = false; }
      }
      return
    }

    if (!this.tabs[value]) {
      return
    }

    for (let i = 0; i < this.tabs.length; i++) {
      if ("active" in this.tabs[i]) { this.tabs[i].active = i === value; }
    }
  }
}

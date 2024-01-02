import { css, PropertyValues } from 'lit';
import { MdList } from '@material/web/list/list';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

@customElement('t-list')
export class TList extends MdList {

  static styles = [
    css`
      :host {
        /** MdList Styling **/
        --md-list-container-color: var(--t-list-container-color, #ffffff) !important;
        --md-ref-typeface-plain: var(--t-list-container-font, 'Roboto Mono, monospace');

        width: var(--t-list-container-width, 165px);
        gap: var(--t-list-container-gap, 24px);

        padding-right: var(--t-list-container-padding-right, 0px) !important;
        padding-left: var(--t-list-container-padding-left, 0px) !important;
        padding-top: var(--t-list-container-padding-top, 0px) !important;
        padding-bottom: var(--t-list-container-padding-bottom, 0px) !important;
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
      this.addEventListener(`t-${this.event}-item-interaction`, (e: Event) => { this.handleListItemInteraction(e as CustomEvent); });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.event) {
      this.addEventListener(`t-${this.event}-item-interaction`, (e: Event) => { this.handleListItemInteraction(e as CustomEvent); });
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

  protected handleListItemInteraction(event: CustomEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state);
    if (this.activeIndex == currIndex) return
    this.activeIndex = currIndex;
    this.dispatchEvent(
      new CustomEvent(`t-${this.event}-interaction`, {
        detail: { state: event.detail.state },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected onActiveIndexChange(value: number) {
    if (value === -1 || value === undefined) {
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

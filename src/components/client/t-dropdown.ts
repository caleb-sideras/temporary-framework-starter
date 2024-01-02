import { LitElement, PropertyValueMap, html, css } from "lit";
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { TDropdownList } from "./t-dropdown-list";
import { TDropdownTitle } from "./t-dropdown-title";

@customElement('t-dropdown')
export class TDropdown extends LitElement {

  @property({ type: Boolean, reflect: true }) active = false;

  @queryAssignedElements({ flatten: true, slot: 'title' })
  private readonly dropdownTitle: TDropdownTitle[];

  @queryAssignedElements({ flatten: true, slot: 'content' })
  private readonly dropdownList: TDropdownList[];

  @property({ type: String, attribute: 'event' }) event = "dropdown";

  dTitle: TDropdownTitle;
  dList: TDropdownList;

  protected override firstUpdated(_changedProperties: Map<PropertyKey, unknown> | PropertyValueMap<any>): void {
    super.firstUpdated(_changedProperties)
    this.layout()
  }

  protected override updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties)

    if (_changedProperties.has('active')) {
      if (this.active === false) {
        this.dList.activeIndex = -1;
        this.dTitle.active = false;
      }
    }
  }

  layout() {
    if (!this.dropdownTitle) return;
    if (!this.dropdownList) return;

    this.dTitle = this.dropdownTitle[0];
    this.dList = this.dropdownList[0];
  }

  render() {
    return html`
      <slot @t-dropdown-title-item-interaction="${this.handleTitleIteraction}" name="title"></slot>
      <slot @t-dropdown-list-interaction="${this.handleListIteraction}" name="content"></slot>
    `
  }

  private handleTitleIteraction(event: CustomEvent) {
    this.dList.active = event.detail.state.collapsed
  }

  private handleListIteraction(e: CustomEvent) {
    this.active = true;
    this.dTitle.active = true;
    this.dispatchEvent(
      new CustomEvent(`t-${this.event}-interaction`, {
        detail: { state: this },
        bubbles: true,
        composed: true,
      })
    );
  }
}

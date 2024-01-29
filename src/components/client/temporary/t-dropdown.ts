import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, queryAssignedElements } from 'lit/decorators.js';
import { TDropdownList } from "./t-dropdown-list";
import { TDropdownTitle } from "./t-dropdown-title";
import { ListItem } from "@material/web/list/internal/list-navigation-helpers";
import { TDropdownListItem } from "./t-dropdown-list-item";

@customElement('t-dropdown')
export class TDropdown extends LitElement {

  @queryAssignedElements({ flatten: true, slot: 'title' })
  private readonly dropdownTitle: TDropdownTitle[];

  @queryAssignedElements({ flatten: true, slot: 'content' })
  private readonly dropdownList: TDropdownList[];

  public dTitle: TDropdownTitle;
  public dList: TDropdownList;

  protected override firstUpdated(_changedProperties: PropertyValueMap<TDropdown>): void {
    this.layout()
  }

  get items(): ListItem[] {
    if (!this.dList) return [];

    return this.dList.items;
  }

  get dtitle(): TDropdownTitle {
    return this.dTitle;
  }

  layout() {
    if (!this.dropdownTitle) return;
    if (!this.dropdownList) return;

    this.dTitle = this.dropdownTitle[0];
    this.dList = this.dropdownList[0];
  }

  render() {
    return html`
      <slot name="title" @title-activation='${this.handleTitleIteraction}'></slot>
      <slot name="content" @external-activation='${this.handleExternalActivation}'></slot>
    `
  }

  handleTitleIteraction() {
    this.dList.active = this.dTitle.open;
  }

  /** 
  * Case where an external listController changes a dropdown-list-item tabIndex
  * NOTE: Since DropdownList inherits from MdList, if the parent listController doesn't init the items to -1, the first item will be 0 
  */
  handleExternalActivation(event: Event) {
    const dItem = event.target as TDropdownListItem;
    if (!dItem.active) {
      this.dTitle.active = false;
    } else if (dItem.active) {
      this.dTitle.active = true;
      if (this.dTitle.open) this.dTitle.open = true;
      if (this.dList.active) this.dList.active = true;
    }
  }
}

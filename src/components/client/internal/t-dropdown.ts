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
    this.dList.collapsed = this.dTitle.collapsed;
    console.log(this.dTitle.collapsed, this.dList.collapsed);
  }

  /** 
  * Case where an external listController changes a dropdown-list-item tabIndex
  * NOTE: Since DropdownList inherits from MdList, if the parent listController doesn't init the items to -1, the first item will be 0 
  */
  handleExternalActivation(event: Event) {
    const eventItem = event.target as TDropdownListItem;
    if (eventItem.tabIndex === -1) {
      this.dTitle.tabIndex = -1;
    } else if (eventItem.tabIndex === 0) {
      this.dTitle.tabIndex = 0;
      if (this.dTitle.collapsed) this.dTitle.collapsed = false;
      if (this.dList.collapsed) this.dList.collapsed = false;
    }
  }
} 

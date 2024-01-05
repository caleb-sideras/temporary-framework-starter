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

  protected dTitle: TDropdownTitle;
  protected dList: TDropdownList;

  protected override firstUpdated(_changedProperties: PropertyValueMap<TDropdown>): void {
    super.firstUpdated(_changedProperties)
    this.layout()
  }

  get items(): ListItem[] {
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
  * case where an external listController changes a dropdown-list-item tabIndex
  */
  // TODO: spooky action activating the title tabIndex - something about the initialization stage with the title not being in a list
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

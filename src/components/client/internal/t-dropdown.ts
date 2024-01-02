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


  // many solutions -- non ideal. thinking...
  //1. make dropdown itself the controller, add another state?
  // 2. just add a listener on the title to emit an event on change? -- doesnt make sense since why should an external controller query the title opposed to the parent?

  // WOW -- an interesting solution is simply to store the LISTS in the controller and then using the items to reurn the items then iterate over them for a match????????? once a match is found you simply set parent collapsed to true/false
  // removes the need for storing induvidual items->title map
  // adds a global control mechanism
  // BUT adds another state in dropdown - ehg
  // ok but how does this scale?
  // idk - wouldnt scale with nested unless


  // OK BUT IT ISNT - no need to explictly highlight the title if the list/dropdown can detect a highlighted child. ok this is the solution. interesting. so the ListItem would need to emit an event when the tabIndex is changed externally 'external-activation' -> np!!! 
  // this scales well! can even OPEN the list based on external activation - easy
  // only downside is that i would need to create a new dropdown-list-element! np bossmen

  // only issue i see is that you cannot use your own components - have to use mine!

  // ISSUE - this approach will create an loop?
  // case request-activation -> activates -> updated -> external-activation -- ok not really an issue just messy

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
    console.log(this.dTitle.tabIndex, this.dList.collapsed);
  }

  /** 
  * case where an external listController changes a dropdown-list-item tabIndex
  */
  handleExternalActivation(event: Event) {
    const eventItem = event.target as TDropdownListItem;
    if (eventItem.tabIndex === -1) {
      this.dTitle.tabIndex = -1;
    } else if (eventItem.tabIndex === 0) {
      this.dTitle.tabIndex = 0;
      if (this.dList.collapsed) this.dList.collapsed = false;
    }
  }
} 

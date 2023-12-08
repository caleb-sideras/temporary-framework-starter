
import { PropertyValues } from 'lit';
import { TList } from './t-list';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { TListItem } from './t-list-item';
import { TDropdown } from './t-dropdown';

@customElement('t-navigation-list')
export class TNavigationList extends TList {

  @property({ type: String, attribute: 'event' }) event = "list";

  @queryAssignedElements({ flatten: true })
  protected readonly slotItems!: (TListItem | TDropdown)[];

  @queryAssignedElements({ flatten: true })
  protected readonly slotter!: (TListItem | TDropdown)[];

  override tabs: (TListItem | TDropdown)[] = [];
  INITIAL_INDEX: number;

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.INITIAL_INDEX = this.activeIndex
    console.log("slotItems", this.slotItems)
    console.log("slotter", this.slotter)
  }

  protected override updated(changedProperties: PropertyValues<TNavigationList>) {
    super.updated(changedProperties);
    console.log("slotItems", this.slotItems)
    console.log("slotter", this.slotter)
    if (changedProperties.has('active')) {
      if (this.active) this.activateList()
    }
  }

  private activateList() {
    console.log("activateList")
    if (!this.tabs[this.INITIAL_INDEX]) return
    this.tabs[this.INITIAL_INDEX].click()
  }
}

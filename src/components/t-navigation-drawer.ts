import { PropertyValueMap } from "lit";
import { property, customElement } from "lit/decorators.js";
import { TList } from './t-list';

@customElement('t-navigation-drawer')
export class TNavigationDrawer extends TList {

  @property({ type: String, attribute: 'active-index' }) activeId = "";

  @property({ type: String, attribute: 'event' }) event = "drawer";

  @property({ type: Number, attribute: 'parent-index' }) parentIndex = -1;

  private idToIndex = new Map<string, number>();

  firstUpdated(changedProperties: PropertyValueMap<TNavigationDrawer>): void {
    super.firstUpdated(changedProperties as PropertyValueMap<TList>);
    this.initId();
    this.setActiveIndex()
  }

  protected override updated(changedProperties: PropertyValueMap<TNavigationDrawer>): void {
    if (changedProperties.has('activeId')) this.setActiveIndex();
    super.updated(changedProperties as PropertyValueMap<TList>);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.event) {
      this.addEventListener(`t-${this.event}-list-interaction`, (e: Event) => { this.handleListInteraction(e); });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.event) {
      this.addEventListener(`t-${this.event}-list-interaction`, (e: Event) => { this.handleListInteraction(e); });
    }
  }

  handleListInteraction(e: CustomEvent) {
    console.log(`t-${this.event}-interaction`)
    this.dispatchEvent(
      new CustomEvent(`t-${this.event}-interaction`, {
        detail: { state: e.detail.state },
        bubbles: true,
        composed: true,
      })
    );
  }

  setActiveIndex() {
    if (!this.idToIndex.has(this.activeId)) {
      this.activeIndex = -1;
      return;
    }

    this.activeIndex = this.idToIndex.get(this.activeId) as number;
  }

  initId() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id !== "") {
        this.idToIndex.set(this.tabs[i].id, i)
      }
    }
  }
  override onActiveIndexChange(value: number) {
    console.log(this.id, this.activeIndex)
    if (value === -1 || value === undefined) {
      for (let i = 0; i < this.tabs.length; i++) {
        if ("active" in this.tabs[i]) { this.tabs[i].active = false; }
        if ("activeIndex" in this.tabs[i]) { this.tabs[i].activeIndex = 0; }
      }
      return
    }

    if (!this.tabs[value]) {
      return
    }

    for (let i = 0; i < this.tabs.length; i++) {
      if ("active" in this.tabs[i]) { this.tabs[i].active = i === value; }
      if ("activeIndex" in this.tabs[i]) { this.tabs[i].activeIndex = 0; }
    }
  }
}

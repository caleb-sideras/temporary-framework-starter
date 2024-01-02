
import { PropertyValues, html, css } from 'lit';
import { MdList } from '@material/web/list/list';
import { customElement, property, queryAssignedElements  } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TDropdownItem } from './t-dropdown-item';

@customElement('t-dropdown-list')
export class TDropdownList extends MdList {

  static styles = [
    css`
    :host{
      padding: 0px !important;
    }

    .list-wrap{
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 16px;
    }

    .visible{
      height: auto;
      display: block;
    }

    .hidden{
      height: 0px;
      display: none;
    }
  `,
    ...MdList.styles
  ]

  @property({ type: Number, attribute: 'active-index' }) activeIndex = -1;

  @property({ type: Boolean, reflect: true }) collapsed = false;

  @queryAssignedElements({ flatten: true })
  protected override readonly slotItems!: TDropdownItem[];

  tabs: TDropdownItem[] = [];

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TDropdownList>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  protected override render() {

    return html`
      <div 
      @dropdown-item-interaction=${this.handleListItemInteraction}
      class="list-wrap ${classMap(this.getRenderClasses())}"
      >
        ${super.render()}
      </div>
    `
  }

  private getRenderClasses() {
    return {
      'hidden': this.collapsed,
      'visible': !this.collapsed,
    };
  }

  layout() {
    if (!this.slotItems) return;
    const navTabs: TDropdownItem[] = [];
    for (const node of this.slotItems) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }

  private handleListItemInteraction(event: CustomEvent) {
    const currIndex = this.tabs.indexOf(event.detail.state as TDropdownItem);
    if (this.activeIndex != currIndex) {
      this.activeIndex = currIndex;
      this.dispatchEvent(
        new CustomEvent('t-dropdown-list-interaction', {
          detail: { state: this },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private onActiveIndexChange(value: number) {
    if (value === -1) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i]) this.tabs[i].active = false;
      }
      return
    }

    if (!this.tabs[value]) {
      return
    }

    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i]) this.tabs[i].active = i === value;
    }
  }
}

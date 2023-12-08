import { PropertyValues, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TList } from './t-list';

@customElement('t-navigation-rail-list')
export class TNavigationRailList extends TList {

  static styles = [
    css`
    :host{
      --md-list-container-color: var(--t-navigation-rail-list-container-color) !important;
--md-ref-typeface-plain: 'Roboto Mono, monospace';

      padding: 0px !important;
      background: var(--t-navigation-rail-list-container-color);
    }
  `,
    ...TList.styles
  ]

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @property({ type: String, attribute: 'event' }) event = "rail-list";

  @property({ type: Boolean, attribute: 'init-list' }) initList = false;

  INITIAL_INDEX: number

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
    this.INITIAL_INDEX = this.activeIndex
  }

  protected override updated(changedProperties: PropertyValues<TNavigationRailList>) {
    super.updated(changedProperties as PropertyValues<TList>)

    if (changedProperties.has('initList')) {
      if (this.initList) this.handleInitList()
    }
  }

  private handleInitList() {
    if (!this.tabs[this.INITIAL_INDEX]) return
    this.tabs[this.INITIAL_INDEX].click()
  }
}

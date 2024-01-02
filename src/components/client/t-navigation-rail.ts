import { css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TList } from './t-list';

@customElement('t-navigation-rail')
export class TNavigationRail extends TList {

  static styles = [
    css`
      :host {
        width: auto !important;
      }
  `,
    ...TList.styles
  ]

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @property({ type: String, attribute: 'event' }) event = "rail";
  // case for initList to be removed and any EXTERNAL changes to active index constitutes a click
  @property({ type: Boolean, attribute: 'init-list' }) initList = false;

  private INITIAL_INDEX: number

  override firstUpdated(changedProperties: PropertyValues<TNavigationRail>) {
    this.INITIAL_INDEX = this.activeIndex;

    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TNavigationRail>) {
    super.updated(changedProperties as PropertyValues<TList>);

    if (changedProperties.has('initList')) {
      if (this.initList) this.handleInitList();
    }
  }

  private handleInitList() {
    if (!this.tabs[this.INITIAL_INDEX]) return;
    this.tabs[this.INITIAL_INDEX].click();
  }
}

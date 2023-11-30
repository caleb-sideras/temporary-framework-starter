import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { MdNavigationTab } from '@material/web/labs/navigationtab/navigation-tab.js';
import { TNavigationBarMain } from './t-navigation-bar-main';

import { MdNavigationDrawerModal } from '@material/web/labs/navigationdrawer/navigation-drawer-modal.js';
import { NavigationBarState } from '@material/web/labs/navigationbar/internal/state.js';
import { NavigationTabInteractionEvent } from '@material/web/labs/navigationbar/internal/constants.js';
import { TNavigationBarSub } from './t-navigation-bar-sub';

import "../../../static/css/output.css";

@customElement('t-navigation-bar')
export class TNavigationBar extends LitElement {

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @queryAssignedElements({ flatten: true, slot: 'main' })
  private readonly tNavigationBarMain!: TNavigationBarMain[];

  @queryAssignedElements({ flatten: true, slot: 'sub' })
  private readonly tNavigationBarSub!: TNavigationBarSub[];

  main: TNavigationBarMain
  sub: TNavigationBarSub

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TNavigationBar>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  render() {
    return html`
      <slot @navigation-bar-main="${this.handleNavigationBarMainInteraction}" name="main"></slot>
      <slot name="sub"></slot>
    `;
  }

  layout() {
    if (!this.tNavigationBarMain || this.main) return;
    if (!this.tNavigationBarSub || this.sub) return;

    if (this.tNavigationBarMain.length > 0) {
      this.main = this.tNavigationBarMain[0]
    }

    if (this.tNavigationBarSub.length > 0) {
      this.sub = this.tNavigationBarSub[0]
    }
  }

  private handleNavigationBarMainInteraction(event: CustomEvent) {
    // this line needed?
    this.activeIndex = event.detail.activeIndex;
    this.tNavigationBarSub[0].activeIndex = this.activeIndex
  }

  private onActiveIndexChange(value: number) {

    if (!this.main) throw new Error('NavigationBarMain: Empty');
    if (!this.sub) throw new Error('NavigationBarSub: Empty');

    if (this.activeIndex == value) {
      return
    }
    this.activeIndex = value
    this.sub.activeIndex = this.activeIndex
  }
}

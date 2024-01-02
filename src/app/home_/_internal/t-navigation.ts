import { LitElement, html, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { TNavigationRail } from './t-navigation-rail';
import { TNavigationDrawer } from './t-navigation-drawer';


@customElement('t-navigation')
export class TNavigation extends LitElement {

  @property({ type: Number, attribute: 'active-index' }) activeIndex = 0;

  @queryAssignedElements({ flatten: true, slot: 'rail' })
  private readonly tNavigationBarMain!: TNavigationRail[];

  @queryAssignedElements({ flatten: true, slot: 'drawer' })
  private readonly tNavigationBarSub!: TNavigationDrawer[];


  main: TNavigationRail
  sub: TNavigationDrawer

  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.layout();
  }

  protected override updated(changedProperties: PropertyValues<TNavigation>) {
    if (changedProperties.has('activeIndex')) {
      this.onActiveIndexChange(this.activeIndex);
    }
  }

  render() {
    return html`
      <slot @navigation-bar-main="${this.handleNavigationBarMainInteraction}" name="rail"></slot>
      <slot name="drawer"></slot>
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

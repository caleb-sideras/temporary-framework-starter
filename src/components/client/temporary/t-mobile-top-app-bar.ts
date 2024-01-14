import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, queryAssignedElements } from "lit/decorators.js";
import { TListItem } from "./t-list-item";
import { TMobileNavigation } from "./t-mobile-navigation";


@customElement('t-mobile-top-app-bar')
export class TMobileTopAppBar extends LitElement {
  static styles = [
    css`
      .t-mobile-top-app-bar--container{
        display: flex;
        flex-direction: column;   
        gap: var(--t-mobile-top-app-bar-gap, 32px);
        padding: var(--t-mobile-top-app-bar-padding, 16px);
        background: var(--t-mobile-top-app-bar-background, --md-sys-color-on-primary);
      }
  `
  ]

  @queryAssignedElements({ slot: 'navigationIcon' })
  private readonly navigationIcons!: Array<TListItem>;

  protected navigationIcon: TListItem;
  protected mobileNav: TMobileNavigation;

  protected firstUpdated(_changedProperties: PropertyValueMap<TMobileTopAppBar>): void {
    this.layout();
  }

  layout() {

    this.initNavigationIcon();
  }

  initNavigationIcon() {
    if (!this.navigationIcons || this.navigationIcons.length > 1) return;

    this.navigationIcon = this.navigationIcons[0];

    const htmlElements = document.getElementsByTagName('t-mobile-navigation');
    if (!htmlElements) return;

    this.mobileNav = htmlElements[0] as TMobileNavigation;
  }

  activateNav() {
    this.mobileNav.opened = true;
  }

  render() {
    return html`
    <div class="t-mobile-top-app-bar--container">        
     <slot name="navigationIcon" @click="${this.activateNav}"</slot> 
     <slot name="title"></slot> 
    </div>
      `
  }

}

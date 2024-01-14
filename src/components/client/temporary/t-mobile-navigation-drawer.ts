import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TNavigationContainer } from "./t-mobile-navigation-container";

/**
 * @summary TMobileNavigationDrawer holds and controls drawer items
 *
 * @description
 * Extends TNavigationContainer and emits 'activate-rail' 
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-mobile-navigation-drawer')
export class TMobileNavigationDrawer extends TNavigationContainer {
  static styles = [
    ...TNavigationContainer.styles,
    css`
      .t-mobile-navigation-drawer-content{       
        margin-right: 0;
        margin-left: 40px;
      }     
    `
  ]
  activateRail() {
    this.dispatchEvent(
      new CustomEvent(`activate-rail`, {
        detail: { state: this },
        bubbles: true,
        composed: true,
      })
    );
  }

  override render() {
    return html`
			<t-list-item interactive type="button" @click="${this.activateRail}" tabindex="0">
				Main Menu
				<md-icon slot="start" class="material-symbols-filled">arrow_back</md-icon>
			</t-list-item>
      <div class="t-mobile-navigation-drawer-content">
        ${super.render()}
      </div>
      `
  }
}

import { customElement } from 'lit/decorators.js';
import { TMobileNavigationContainer } from './t-mobile-navigation-container'
import { ListItem } from './internal/t-list';
import { html } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    't-mobile-navigation-drawer': TMobileNavigationDrawer;
  }
}

/**
 * @summary TMobileNavigationDrawer holds the drawer items for the mobile navigation modal
 *
 * @description
 * Extends MdList and shows/hides based on active state
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-mobile-navigation-drawer')
export class TMobileNavigationDrawer extends TMobileNavigationContainer {

  // temporary fix to get through the day
  override findMatchingParentItem(url: string, listItems: ListItem[]): ListItem | null {
    const cleanUrl = this.removeFirstLastSlash(url).split('/');
    console.log("cleanUrl", cleanUrl);
    for (const item of listItems) {
      const cleanItemHref = this.removeFirstLastSlash(item.href).split('/');
      console.log("cleanItemHref ", cleanItemHref);

      if (cleanUrl.join('/') === cleanItemHref.join('/')) {
        return item
      }
    }
    return null
  }

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
      ${super.render()}
      `
  }
}

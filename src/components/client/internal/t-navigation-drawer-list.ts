import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TDrawerList } from './internal/t-list';
import { styles } from '@material/web/list/internal/list-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    't-navigation-drawer-list': TNavigationDrawerList;
  }
}

/**
 * @summary DrawerList is an extension of MdList - aimed at adding extra functionality - such as allowing both items and lists
 *
 * @description
 * DrawerList handles all of the items de/activations so the child components can be used in other places. The child simply offers all its respective childeren up to the parent and handles other activation states.
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-navigation-drawer-list')
export class TNavigationDrawerList extends TDrawerList {

  static override styles = [
    css`
      :host{
        --md-list-container-color: var(--t-navigation-drawer-list-container-color, #ffffff);
        font-family: var(--t-navigation-drawer-list-container-font, 'Roboto Mono, monospace');
        gap: var(--t-navigation-drawer-list-container-gap, 0px);
        padding-right: var(--t-navigation-drawer-list-container-padding-right, 0px !important);
        padding-left: var(--t-navigation-drawer-list-container-padding-left, 0px) !important;
        padding-top: var(--t-navigation-drawer-list-container-padding-top, 8px) !important;
        padding-bottom: var(--t-navigation-drawer-list-container-padding-bottom, 0px) !important;
        width: var(--t-navigation-drawer-list-container-width, 165px);
      }
      :host([tabindex="-1"]){
       display: none !important; 
      }
    `,
    styles
  ];

  override itemAttributes: string[] = ['t-list-item', 't-list-item-2'];
  override listAttributes: string[] = ['t-dropdown'];

}

import { css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { TDrawerList } from './internal/t-list';
import { styles } from '@material/web/list/internal/list-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    't-navigation-drawer-list': TNavigationDrawerList;
  }
}

/**
 * @summary DrawerList is an extension of MdList - aimed at adding extra functionality - such as dropdown and interop with DrawerRail
 *
 * @description
 * DrawerList embodies the 'smart-parent, dumb-child' implementation. The parent controls almost all business logic allowing the child components to be used on other places. The only thing the child does, is offer all their respective childeren up to the parent.
 * three-line.
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

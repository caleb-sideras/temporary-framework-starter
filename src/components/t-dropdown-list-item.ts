import { customElement, property } from 'lit/decorators.js';
import { TNavigationDrawerItem } from './t-navigation-drawer-list-item';

@customElement('t-dropdown-list-item')
export class TDropdownItem extends TNavigationDrawerItem {

  @property({ type: String, attribute: 'event-name' }) event = "dropdown-list";

}

import { TNavigationRailItem  } from "./t-navigation-rail-item";
import { property, customElement } from "lit/decorators.js";

@customElement('t-navigation-drawer-item')
export class TNavigationDrawerItem extends TNavigationRailItem {
  
  @property({ type: String, attribute: 'event-name' }) event = "drawer-list";
}

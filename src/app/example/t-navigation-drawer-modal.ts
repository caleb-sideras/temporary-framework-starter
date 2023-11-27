
import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { TNavigationTab } from './t-navigation-tab';

import { NavigationBarState } from '@material/web/labs/navigationbar/internal/state.js';
import { NavigationTabInteractionEvent } from '@material/web/labs/navigationbar/internal/constants.js';
import { MdNavigationDrawerModal } from '@material/web/labs/navigationdrawer/navigation-drawer-modal';

export type ListItemType = 'text' | 'button' | 'link';

@customElement('t-navigation-drawer-modal')
export class TNavigationDrawerModal extends MdNavigationDrawerModal   {


  
}

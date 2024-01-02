import { PropertyValueMap, css } from 'lit';
import { TListItem } from "./t-base-list-item";
import { property, queryAssignedElements, customElement } from 'lit/decorators.js';

@customElement('t-navigation-rail-item')
export class TNavigationRailItem extends TListItem {
  static styles = [
    css`
      :host{
        background-color: var(--t-navigation-rail-list-item-container-color);
        --md-list-item-label-text-color	: var(--t-navigation-rail-list-item-color);
        --md-list-item-trailing-icon-color: var(--t-navigation-rail-list-item-color);
        border-radius: 32px !important;        

        /** Dynamic **/
        --md-list-item-hover-state-layer-color: var(--t-navigation-rail-list-item-hover-state-layer-color);
        --md-list-item-hover-state-layer-opacity: var(--t-navigation-rail-list-item-hover-state-layer-opacity);

        --md-list-item-pressed-state-layer-color: var(--t-navigation-rail-list-item-pressed-state-layer-color);
        --md-list-item-pressed-state-layer-opacity: var(--t-navigation-rail-list-item-pressed-state-layer-opacity);
    
        margin-bottom: 24px;
      }

      :host([active]){
        --md-list-item-label-text-color: var(--t-navigation-rail-list-item-active-color) !important;
        --md-list-item-trailing-icon-color: var(--t-navigation-rail-list-item-active-color) !important;

        border: solid !important;
        border-width: 1px !important;
        border-color: var(--t-navigation-rail-list-item-active-color) !important;
      }
    `,
    ...TListItem.styles,
  ];

  @property({ type: String, attribute: 'event-name' }) event = "rail";
  
}

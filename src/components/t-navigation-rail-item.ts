import { css } from 'lit';
import { TListItem } from "./t-list-item";
import { property, customElement } from 'lit/decorators.js';

@customElement('t-navigation-rail-item')
export class TNavigationRailItem extends TListItem {
  static styles = [
    css`
      md-item {     
          --md-list-item-label-text-size: var(--t-navigation-rail-list-item-text-size);
      }

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
      }

      :host([active]){
        --md-list-item-label-text-color: var(--t-navigation-rail-list-item-active-color);
        --md-list-item-trailing-icon-color: var(--t-navigation-rail-list-item-active-color);
      }
    `,
    ...TListItem.styles,
  ];

  @property({ type: String, attribute: 'event-name' }) event = "rail";
}

import { css } from 'lit';
import { TListItem } from "./t-list-item";
import { property, customElement } from 'lit/decorators.js';

@customElement('t-navigation-rail-item')
export class TNavigationRailItem extends TListItem {
  static styles = [
    css`
      md-item {     
          --md-list-item-label-text-size: var(--t-navigation-rail-list-item-text-size, 0.95rem);
      }

      :host{
        background-color: var(--t-navigation-rail-list-item-container-color, var(--md-sys-color-primary-container, #f5f5f5));
        --md-list-item-label-text-color	: var(--t-navigation-rail-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        --md-list-item-trailing-icon-color: var(--t-navigation-rail-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        border-radius: var(--t-navigation-rail-list-item-border-radius, 32px) !important;

        /** Dynamic **/
        --md-list-item-hover-state-layer-color: var(--t-navigation-rail-list-item-hover-state-layer-color, #000000);
        --md-list-item-hover-state-layer-opacity: var(--t-navigation-rail-list-item-hover-state-layer-opacity, 0.06);

        --md-list-item-pressed-state-layer-color: var(--t-navigation-rail-list-item-pressed-state-layer-color, #000000);
        --md-list-item-pressed-state-layer-opacity: var(--t-navigation-rail-list-item-pressed-state-layer-opacity, 0.08);   
      }

      :host([active]){
        --md-list-item-label-text-color: var(--t-navigation-rail-list-item-active-color, var(--md-sys-color-primary, #743342));
        --md-list-item-trailing-icon-color: var(--t-navigation-rail-list-item-active-color, var(--md-sys-color-primary, #743342));
      }
    `,
    ...TListItem.styles,
  ];

  @property({ type: String, attribute: 'event-name' }) event = "rail";
}

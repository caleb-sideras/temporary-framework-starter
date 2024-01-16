import { PropertyValueMap, css } from 'lit'
import { customElement } from 'lit/decorators.js';
import { TListItem } from './t-list-item';

@customElement('t-dropdown-list-item')
export class TDropdownListItem extends TListItem {

  static override styles = [
    css`
      :host{
        margin-left:16px;
      }
    `,
    ...TListItem.styles
  ]

  protected updated(_changedProperties: PropertyValueMap<TDropdownListItem>): void {
    if (_changedProperties.has('active')) {
      this.dispatchEvent(this.createExternalActivationEvent());
    }
  }

  protected createExternalActivationEvent() {
    return new Event('external-activation', { bubbles: true, composed: true });
  }
}

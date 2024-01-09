import { customElement } from 'lit/decorators.js';
import { TListItem2 } from "./t-list-item-2";
import { PropertyValueMap } from 'lit';

@customElement('t-dropdown-list-item')
export class TDropdownListItem extends TListItem2 {

  static get observedAttributes() {
    return ["tabindex", ...super.observedAttributes];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {

    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === "tabindex" && oldValue != newValue) {
      console.log("tabindex changed from", oldValue, "to", newValue, "on item", this);

      this.dispatchEvent(this.createExternalActivationEvent());
    }
  }

  createExternalActivationEvent() {
    // console.log("createExternalActivationEvent");

    return new Event('external-activation', { bubbles: true, composed: true });
  }
}

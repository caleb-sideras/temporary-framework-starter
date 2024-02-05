import { nothing, LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export class HTMXElement extends LitElement {

  @property({ type: String }) href = '';
  @property({ type: String, attribute: 'hx-boost' }) hxBoost = '';
  @property({ type: String, attribute: 'hx-get' }) hxGet = '';
  @property({ type: String, attribute: 'hx-post' }) hxPost = '';
  @property({ type: String, attribute: 'hx-patch' }) hxPatch = '';
  @property({ type: String, attribute: 'hx-put' }) hxPut = '';
  @property({ type: String, attribute: 'hx-delete' }) hxDelete = '';
  @property({ type: String, attribute: 'hx-trigger' }) hxTrigger = '';
  @property({ type: String, attribute: 'hx-indicator' }) hxIndicator = '';
  @property({ type: String, attribute: 'hx-target' }) hxTarget = '';
  @property({ type: String, attribute: 'hx-swap' }) hxSwap = '';
  @property({ type: String, attribute: 'hx-history-elt' }) hxHistoryElt = '';

  firstUpdated() {
    // Change to importing HTMX with this element? As this relies on the global DOM scope
    // @ts-ignore
    htmx.process(this.shadowRoot);
  }


  renderAnchor(content: unknown) {
    return html`
      <a
        href="${this.href || nothing}"
        hx-boost="${this.hxBoost|| nothing}"
      >
        ${content}
      </a>
    `
  }

  renderDiv(content: unknown) {
    return html`
      <div
        hx-get="${this.hxGet}"
        hx-post="${this.hxPost}"
        hx-patch="${this.hxPatch}"
        hx-put="${this.hxPut}"
        hx-delete="${this.hxDelete}"
        hx-trigger="${this.hxTrigger}"
        hx-indicator="${this.hxIndicator}"
        hx-target="${this.hxTarget}"
        hx-swap="${this.hxSwap}"
        hx-history-elt="${this.hxHistoryElt}"      >
        ${content}
      </div>
    `
  }
}

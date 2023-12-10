import { css, PropertyValues, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { MdListItem } from '@material/web/list/list-item.js';
import { html as staticHtml } from 'lit/static-html.js';

@customElement('t-list-items')
export class TListItem extends MdListItem {

  static styles = [
    css`
      md-item {
        gap: 8px !important;
      }      
    `,
    ...MdListItem.styles
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: String, attribute: 'event-name' }) event = "list";

  constructor() {
    super();
    this.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e: MouseEvent) {
    if (this.active) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }

    this.dispatchEvent(
      new CustomEvent(`t-${this.event}-item-interaction`, {
        detail: { state: this },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

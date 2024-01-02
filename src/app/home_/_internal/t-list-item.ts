import { html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MdListItem } from '@material/web/list/list-item.js';
import { classMap } from 'lit/directives/class-map.js';

interface NavigationTabState {
  active: boolean;
}

@customElement('t-list-item')
export class TListItem extends MdListItem implements NavigationTabState {

  static styles = [
    css`
    .inactive, .active {
        border-radius: 9999px;        
        width: 100%;
      }
    .active {
      background: var(--md-sys-color-primary);
      --md-list-item-label-text-color: var(--md-sys-color-on-primary);
        } 
  `,
    ...MdListItem.styles
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  protected override updated(_: PropertyValues<TListItem>) {
    this.onclick = (event) => {
      // if the t-list was not initialized (init-list), then the current active element cannot be clicked
      if (this.active) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }

      this.dispatchEvent(
        new CustomEvent('list-item-interaction', {
          detail: { state: this },
          bubbles: true,
          composed: true,
        }),
      );
    };
  }

  protected override render() {

    const classes = {
      inactive: !this.active,
      active: this.active,
    };

    return html`
      <div class=${classMap(classes)}>
        ${super.render()}
      </div>
    `
  }
}

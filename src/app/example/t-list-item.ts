import { html, css, CSSResult, PropertyValues } from 'lit';
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
      .inactive, 
        .active {
          @apply rounded-full;
        }

        .active {
          @apply bg-secondary-container;
        }  
  `,
    MdListItem.styles
  ] as CSSResult[];

  @property({ type: Boolean, reflect: true }) active = false;

  protected override updated(changedProperties: PropertyValues<TListItem>) {
    this.onclick = (event) => {
      // if (this.active) {
      event.stopImmediatePropagation();
      event.preventDefault();
      // }

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

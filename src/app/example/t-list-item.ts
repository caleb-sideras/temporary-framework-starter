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
      background: var(--md-sys-color-secondary-container) 
    }  
  `,
    ...MdListItem.styles
  ];

  @property({ type: Boolean, reflect: true }) active = false;

  // TODO: Not sure why Material 3 team checks for child render
  // override firstUpdated(changedProperties: PropertyValues) {
  //   super.firstUpdated(changedProperties);
  //   const event = new Event('list-item-rendered', {
  //     bubbles: true,
  //     composed: true,
  //   });
  //   this.dispatchEvent(event);
  // }

  protected override updated(changedProperties: PropertyValues<TListItem>) {
    this.onclick = (event) => {
      // if the t-list was not initialized (init-list), then the current active element cannot be clicked
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

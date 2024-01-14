import { PropertyValues, css, nothing } from 'lit';
import { literal, html as staticHtml, StaticValue } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { ARIAMixinStrict } from '@material/web/internal/aria/aria.js';
import { ListItemEl as ListItem } from '@material/web/list/internal/listitem/list-item';
import { styles } from '@material/web/list/internal/listitem/list-item-styles.css.js';
import { createRequestActivationEvent, } from '@material/web/list/internal/list-navigation-helpers.js';

declare global {
  interface HTMLElementTagNameMap {
    'temporary-list-item': TListItem;
  }
}


@customElement('temporary-list-item')
export class TListItem extends ListItem {
  static override styles = [
    styles,
    css`
      md-item {     
          --md-list-item-label-text-size: var(--t-list-item-text-size, 0.95rem);
      }

      :host() { 
        --md-list-item-label-text-color	: var(--t-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        --md-list-item-trailing-icon-color: var(--t-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        border-radius: var(--t-list-item-border-radius, 32px) !important;

        /** Dynamic **/
        --md-list-item-hover-state-layer-color: var(--t-list-item-hover-state-layer-color, #000000);
        --md-list-item-hover-state-layer-opacity: var(--t-list-item-hover-state-layer-opacity, 0.06);

        --md-list-item-pressed-state-layer-color: var(--t-list-item-pressed-state-layer-color, #000000);
        --md-list-item-pressed-state-layer-opacity: var(--t-list-item-pressed-state-layer-opacity, 0.08);   
      }

      :host([active]) {
        --md-list-item-label-text-color: var(--t-list-item-active-color, var(--md-sys-color-primary, #743342));
        --md-list-item-trailing-icon-color: var(--t-list-item-active-color, var(--md-sys-color-primary, #743342));
      }

      :host([active][border]) {
        border: var(--t-dropdown-list-item-border, solid);        
        border-width: var(--t-dropdown-list-item-border-width, 1px);
        border-color: var(--t-dropdown-list-item-active-color, var(--md-sys-color-primary, #743342));
      }
    `
  ];

  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean, reflect: true }) border = false;
  @property({ type: Boolean, reflect: true, attribute: 'hide-event' }) hideEvent = false;

  protected override willUpdate(changed: PropertyValues<ListItem>) {
    super.willUpdate(changed);

    // fix until htmx supports shadowDOM
    if (this.href) {
      this.type = 'button';
    }

  }

  protected override renderListItem(content: unknown) {
    const isAnchor = this.type === 'link';
    let tag: StaticValue;
    switch (this.type) {
      case 'link':
        tag = literal`a`;
        break;
      case 'button':
        tag = literal`button`;
        break;
      default:
      case 'text':
        tag = literal`li`;
        break;
    }

    const isInteractive = this.type !== 'text';
    // TODO(b/265339866): announce "button"/"link" inside of a list item. Until
    // then all are "listitem" roles for correct announcement.
    const target = isAnchor && !!this.target ? this.target : nothing;
    return staticHtml`
      <${tag}
        id="item"
        tabindex="${this.isDisabled || !isInteractive ? -1 : 0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.active}
        aria-checked=${(this as ARIAMixinStrict).ariaChecked || nothing}
        aria-expanded=${(this as ARIAMixinStrict).ariaExpanded || nothing}
        aria-haspopup=${(this as ARIAMixinStrict).ariaHasPopup || nothing}
        class="list-item ${classMap(this.getRenderClasses())}"
        href=${this.href || nothing}
        target=${target}
        @click=${this.onClick}
      >${content}</${tag}>
    `;
  }

  protected onClick() {
    if (!this.hideEvent) this.dispatchEvent(createRequestActivationEvent());
  }

  /**
  * NOTE
  * I do not want any visual changes on focus. Below is just for documentation
  */
  // @focus=${this.onFocus}
  // protected override onFocus() {
  /** 
  * NOTE
  * Prevents focused re-presses
  */

  // if (this.tabIndex !== -1) {
  //   return;
  // }

  /**
  * NOTE
  * Google claim this "Handles the case where the user clicks on the element and then tabs." Based on 'list-navigation-helpers' it just activates the item on focus, which is on every navigation and click. 
  */

  // this.dispatchEvent(createRequestActivationEvent());
  // }
}

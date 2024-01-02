import { css, nothing } from 'lit';
import { literal, html as staticHtml, StaticValue } from 'lit/static-html.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators.js';
import { MdListItem } from '@material/web/list/list-item.js';

@customElement('t-list-item')
export class TListItem extends MdListItem {
  static styles = [
    css`
      md-item {     
          --md-list-item-label-text-size: var(--t-list-item-text-size, 0.95rem);
      }

      :host([tabindex="-1"]) { 
            background-color: var(--t-list-item-container-color, var(--md-sys-color-primary-container, #f5f5f5));
        --md-list-item-label-text-color	: var(--t-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        --md-list-item-trailing-icon-color: var(--t-list-item-color, var(--md-sys-color-on-primary-container, #000000));
        border-radius: var(--t-list-item-border-radius, 32px) !important;

        /** Dynamic **/
        --md-list-item-hover-state-layer-color: var(--t-list-item-hover-state-layer-color, #000000);
        --md-list-item-hover-state-layer-opacity: var(--t-list-item-hover-state-layer-opacity, 0.06);

        --md-list-item-pressed-state-layer-color: var(--t-list-item-pressed-state-layer-color, #000000);
        --md-list-item-pressed-state-layer-opacity: var(--t-list-item-pressed-state-layer-opacity, 0.08);   
      }

      :host([tabindex="0"]) {
        --md-list-item-label-text-color: var(--t-list-item-active-color, var(--md-sys-color-primary, #743342));
        --md-list-item-trailing-icon-color: var(--t-list-item-active-color, var(--md-sys-color-primary, #743342));
      }
    `,
    ...MdListItem.styles,
  ];

  // protected renderListItem(content: unknown) {
  //   this.type = "text";

  //   const isAnchor = this.type === 'link';
  //   let tag: StaticValue;
  //   switch (this.type) {
  //     case 'link':
  //       tag = literal`li`;
  //       break;
  //     case 'button':
  //       tag = literal`button`;
  //       break;
  //     default:
  //     case 'text':
  //       tag = literal`li`;
  //       break;
  //   }

  //   const isInteractive = this.type !== 'text';
  //   // TODO(b/265339866): announce "button"/"link" inside of a list item. Until
  //   // then all are "listitem" roles for correct announcement.
  //   const target = isAnchor && !!this.target ? this.target : nothing;
  //   return staticHtml`
  //     <${tag}
  //       id="item"
  //       tabindex="${this.isDisabled || !isInteractive ? -1 : 0}"
  //       ?disabled=${this.isDisabled}
  //       role="listitem"
  //       aria-selected=${(this as ARIAMixinStrict).ariaSelected || nothing}
  //       aria-checked=${(this as ARIAMixinStrict).ariaChecked || nothing}
  //       aria-expanded=${(this as ARIAMixinStrict).ariaExpanded || nothing}
  //       aria-haspopup=${(this as ARIAMixinStrict).ariaHasPopup || nothing}
  //       class="list-item ${classMap(this.getRenderClasses())}"
  //       href=${this.href || nothing}
  //       target=${target}
  //       @focus=${this.onFocus}
  //     >${content}</${tag}>
  //   `;
  // }

}

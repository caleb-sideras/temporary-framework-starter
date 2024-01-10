import { css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MdList } from '@material/web/list/list';
import { ListItem } from './internal/t-list';

@customElement('t-navigation-rail')
export class TNavigationRail extends MdList {

  static styles = [
    css`
      :host {
        width: auto !important;
        gap: var(--t-navigation-drawer-rail-container-gap, 16px);
      }
  `,
    ...MdList.styles
  ]

  @property({ type: String }) url = '';

  protected override updated(_changedProperties: PropertyValues<TNavigationRail>) {
    if (_changedProperties.has('url') && this.url !== '') {
      this.activateItemFromHref(this.url);
    }
  }

  /**
    * Public Functions
  **/

  activateItemFromHref(href: string) {
    for (const item of this.items as ListItem[]) {
      if (this.removeFirstLastSlash(item.href) === this.removeFirstLastSlash(href)) {

        const activationEvent = new Event('request-activation', { bubbles: true, composed: true });
        Object.defineProperty(activationEvent, 'target', { value: item });

        // @ts-ignore
        this.listController.onRequestActivation(activationEvent);

        return;
      }
    }
  }

  removeFirstLastSlash(text: string) {
    return text.replace(/^\/|\/$/g, "");
  }
}

import { nothing, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MdNavigationTab } from '@material/web/labs/navigationtab/navigation-tab.js';
import { literal, html as staticHtml, StaticValue } from 'lit/static-html.js';

export type ListItemType = 'text' | 'button' | 'link';

@customElement('t-navigation-tab')
export class TNavigationTab extends MdNavigationTab {

  static style = [
    css`
    :host {
      width: 6rem !important; 
      width: 6rem;!important 
    }

    a {
      text-decoration: none; !important
    }

    .anchor {
       width:100%; 
    }
  `,
  ...MdNavigationTab.styles
  ]

  @property({ reflect: true }) type: ListItemType = 'link';

  @property() href = '';

  @property() target: '_blank' | '_parent' | '_self' | '_top' | '' = '';

  // protected override updated(_: PropertyValues<ListItemType>) {
  //   this.onclick = (event) => {
  //     if (this.href = '') {
  //       // event.stopImmediatePropagation();
  //       event.preventDefault();
  //     }
  //   }
  // }

  protected override render() {
    return this.renderNavigationTab()
  }

  protected renderNavigationTab() {
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

    const target = isAnchor && !!this.target ? this.target : nothing;
    const parentRender = super.render();
    return staticHtml`
      <${tag}
          href=${this.href || nothing}
          target=${target}
          style="width: 100%;"
        >
      ${parentRender}
      </${tag}>
    `;
  }
}
